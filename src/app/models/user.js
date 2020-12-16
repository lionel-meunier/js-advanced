import { Address } from "./address.js";

export class User {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.createdAt = moment(data.createdAt);
    this.address = new Address(data.address);
    this.neighbor = new Set();
  }

  get position() {
    return this.address.position;
  }

  /**
   * Compare current user with other for detect if this is neighbor
   * Is neighbor only if current address is less than 100km to another address
   * @param {User} compareUser user compared with current
   */
  isNeighbor(compareUser) {
    return this.address.getDistance(compareUser.address) <= 2000;
  }
}
