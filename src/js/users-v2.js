const users = [
  {
    id: 1,
    createdAt: "2020-02-12T04:41:58.971Z",
    name: "Leonard Walsh",
    address: {
      city: "Boylehaven",
      country: "Comoros",
      latitude: 43.619891,
      longitude: 6.9195798,
    },
  },
  {
    id: 2,
    createdAt: "2020-07-07T00:33:58.010Z",
    name: "Thora Bailey",
    address: {
      city: "East Taniaport",
      country: "Philippines",
      latitude: 43.649891,
      longitude: 3.9195798,
    },
  },
  {
    id: 3,
    createdAt: "2019-10-13T01:15:08.609Z",
    name: "Geraldine Breitenberg",
    address: {
      city: "Aylaview",
      country: "Syrian Arab Republic",
      latitude: 43.619591,
      longitude: 3.9195798,
    },
  },
  {
    id: 4,
    createdAt: "2019-10-13T01:15:08.609Z",
    name: "Marcel Breitenberg",
    address: {
      city: "Aylaview",
      country: "Syrian Arab Republic",
      latitude: 45.619891,
      longitude: 3.9195798,
    },
  },
];

/**
 * Trier les utilisateurs par createdAt
 */
const userSortedByDate = users.sort((a, b) => {
  if (a.createdAt > b.createdAt) {
    return 1;
  } else if (b.createdAt > a.createdAt) {
    return -1;
  } else {
    return 0;
  }
});

/**
 * Trier les utilisateurs par createdAt en utilisant moment
 */
const userSortedByDateWithMoment = users
  .sort((a, b) => {
    const aDate = moment(a.createdAt);
    const bDate = moment(b.createdAt);
    return aDate.diff(bDate);
  })
  .map((u) => u.name);

console.log(
  "user name sorted by date with momentjs",
  userSortedByDateWithMoment
);

class Address {
  constructor(data) {
    this.city = data.city;
    this.country = data.country;
    this.latitude = data.latitude || 0;
    this.longitude = data.longitude || 0;
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

class User {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.createdAt = moment(data.createdAt);
    this.address = new Address(data.address);
    this.neighbor = new Set();
  }

  /**
   * Compare current user with other for detect if this is neighbor
   * Is neighbor only if current address is less than 100km to another address
   * @param {User} compareUser user compared with current
   */
  isNeighbor(compareUser) {
    return this.address.getDistance(compareUser.address) <= 100;
  }
}

const usersClass = users
  .map((userData) => new User(userData))
  .map((currentUser, index, usersInstance) => {
    usersInstance.forEach((userCompare) => {
      if (currentUser !== userCompare && currentUser.isNeighbor(userCompare)) {
        currentUser.neighbor.add(userCompare);
      }
    });
    return currentUser;
  })
  .sort((a, b) => b.neighbor.size - a.neighbor.size);

console.log("User instance sorted by neighbor", usersClass);
