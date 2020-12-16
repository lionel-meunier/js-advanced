export class Address {
  constructor(data) {
    this.city = data.city;
    this.country = data.country;
    this.latitude = data.latitude || 0;
    this.longitude = data.longitude || 0;
  }
  get position() {
    return {
      lat: parseInt(this.latitude, 10),
      lng: parseInt(this.longitude, 10),
    };
  }
  /**
   * Compare current address with another for get distance km
   * @param {Address} compareAddress address compare with current address
   */
  getDistance(compareAddress) {
    var R = 6371; // Radius of the earth in km
    var dLat = (compareAddress.latitude - this.latitude) * (Math.PI / 180);
    var dLon = (compareAddress.longitude - this.longitude) * (Math.PI / 180);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.latitude * (Math.PI / 180)) *
        Math.cos(compareAddress.latitude * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }
}
