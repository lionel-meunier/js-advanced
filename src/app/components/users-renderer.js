import { UserRenderer } from "./user-renderer.js";

export class UsersRenderer {
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
