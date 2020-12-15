document
  .querySelector("#hello")
  .addEventListener("click", () => alert("Bonjour"));

let count = 0;
document.querySelector("#inc button").addEventListener("click", () => {
  // increment count de 1 equivalent a count = count + 1
  count++;
  // remplace le html de l'element ayant la class value dans un element avec l'id inc
  document.querySelector("#inc .value").innerHTML = count;
});

// Exercice 1
// Récupérer la list des utilisateurs et créer le tableau trier par nombre de voisin

const api = new UsersApi();

api.getUsers().then((users) => {
  const usersRenderer = new UsersRenderer(users);
  document.getElementById("users").innerHTML = usersRenderer.render();
});

api.getAll();
// Ajout d'un event listener sur du html qui n'est pas encore créer
document.addEventListener("click", (event) => {
  if (event.target && event.target.classList.contains("btn-show-detail")) {
    api.getDetailUser(event.target.dataset.id).then((res) => {
      alert(JSON.stringify(res));
    });
  }
});

document.querySelector("form#loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  event.stopPropagation();

  const username = event.target.querySelector("input[name=username]").value;
  const password = event.target.querySelector("input[name=password]").value;
  api
    .login(username, password)
    .then((token) => {
      alert(`Token : ${token}`);
    })
    .catch((reason) => {
      event.target.querySelector(".message").innerHTML = reason;
      event.target.querySelector(".message").classList.add("d-block");
    });
});
