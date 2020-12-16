import { User } from "../models/user.js";

export class UsersApi {
  token = null;

  /**
   * Return les 50 premier utilisateur
   * @returns User[] user array sort by neighbor
   */
  getUsers() {
    return fetch("https://api.jsonapi.co/rest/v1/user/list?limit=50")
      .then((res) => res.json())
      .then((res) => this.sortUsersByNeighbor(res.data.users));
  }

  /**
   * Créer la connection et return le token
   * @param {*} email
   * @param {*} password
   * @returns token
   */
  login(email, password) {
    // Fait la requête
    // POST : https://api.jsonapi.co/rest/v1/user/login
    return (
      fetch("https://api.jsonapi.co/rest/v1/user/login", {
        method: "POST",
        // Ajoute le header "Content-Type": "application/json"
        headers: {
          "Content-Type": "application/json",
        },
        // Avec le body = {email : 'mon email', password : 'mon password'}
        body: JSON.stringify({
          email,
          password,
        }),
      })
        // on vérifier si le status est valide
        .then((res) => {
          if (res.status >= 200 && res.status < 400) {
            return res;
          }
          // génére une erreur
          throw res;
        })
        // quand c'est valide on utilise la méthode json() pour parser le body
        .then((res) => res.json())
        // On save le token dans la class et on le renvoie
        .then((res) => {
          this.token = res.data.token;
          return this.token;
        })
        // On gère l'erreur qu'on a générer quand on vérifier le status
        .catch((res) => {
          return res.json().then((res) => {
            throw res.error;
          });
        })
    );
  }

  /**
   * Return le détail de l'utilisateur avec son id
   */
  getDetailUser(id) {
    return fetch(`https://api.jsonapi.co/rest/v1/user/${id}`, {})
      .then((res) => res.json())
      .then((res) => new User(res.data));
  }

  sortUsersByNeighbor(users) {
    return users
      .map((userData) => new User(userData))
      .map((currentUser, index, usersInstance) => {
        usersInstance.forEach((userCompare) => {
          if (
            currentUser !== userCompare &&
            currentUser.isNeighbor(userCompare)
          ) {
            currentUser.neighbor.add(userCompare);
          }
        });
        return currentUser;
      })
      .sort((a, b) => b.neighbor.size - a.neighbor.size);
  }
}
