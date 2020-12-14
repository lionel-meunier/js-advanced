class UserRenderer {
  constructor(user) {
    this.user = user;
  }

  render() {
    return `
      <div>
        ${this.user.name} <small>${this.user.address.country} </small>
        <button class="btn btn-info btn-show-detail" data-id="${this.user.id}">Show</button>
      </div>
    `;
  }
}

class UsersRenderer {
  constructor(users) {
    this.users = users.map((u) => new UserRenderer(u));
  }

  render() {
    let html = "";

    this.users.forEach((u) => {
      html += u.render();
    });

    return `
      <div>${html}</div>
    `;
  }
}
