const users = [
  {
    id: 1,
    createdAt: "2020-02-12T04:41:58.971Z",
    name: "Leonard Walsh",
    address: {
      city: "Boylehaven",
      country: "Comoros",
    },
  },
  {
    id: 2,
    createdAt: "2020-07-07T00:33:58.010Z",
    name: "Thora Bailey",
    address: {
      city: "East Taniaport",
      country: "Philippines",
    },
  },
  {
    id: 3,
    createdAt: "2019-10-13T01:15:08.609Z",
    name: "Geraldine Breitenberg",
    address: {
      city: "Aylaview",
      country: "Syrian Arab Republic",
    },
  },
  {
    id: 4,
    createdAt: "2019-10-13T01:15:08.609Z",
    name: "Marcel Breitenberg",
    address: {
      city: "Aylaview",
      country: "Syrian Arab Republic",
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

console.log(userSortedByDateWithMoment);
