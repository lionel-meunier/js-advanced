// Exercice 1
// Récupérer la list des utilisateurs et créer le tableau trier par nombre de voisin

fetch("https://api.jsonapi.co/rest/v1/user/list?limit=50")
  .then((res) => res.json())
  .then((res) => sortUsersByNeighbor(res.data.users));

fetch("https://api.jsonapi.co/rest/v1/user/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: "toto",
    password: "toto",
  }),
})
  .then((res) => res.json())
  .then((res) => res.data.token)
  .then((res) => console.log(res));
