class UsersApi {
  token = null;

  getUsers() {
    return fetch("https://api.jsonapi.co/rest/v1/user/list?limit=50")
      .then((res) => res.json())
      .then((res) => sortUsersByNeighbor(res.data.users));
  }

  login(email, password) {
    return fetch("https://api.jsonapi.co/rest/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => {
        if (res.status >= 200 && res.status < 400) {
          return res;
        }
        throw res;
      })
      .then((res) => res.json())
      .then((res) => {
        this.token = res.data.token;
        return this.token;
      })
      .catch((res) =>
        res.json().then((res) => {
          throw res;
        })
      );
  }

  getDetailUser(id) {
    return fetch(`https://api.jsonapi.co/rest/v1/user/${id}`, {})
      .then((res) => res.json())
      .then((res) => res.data);
  }
}
