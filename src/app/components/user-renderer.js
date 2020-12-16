export class UserRenderer {
  constructor(user) {
    this.user = user;
  }

  render() {
    return `
      <div>
        ${this.user.name} <small>${this.user.address.country} </small>
        <button class="btn btn-info btn-show-detail" data-id="${this.user.id}">Show</button>
        <button class="btn btn-info btn-show-detail-all" data-id="${this.user.id}">Show all</button>
      </div>
    `;
  }
}
