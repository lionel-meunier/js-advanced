import { User } from "./models/user.js";
import { LoginAttemps } from "./models/login-attemps.js";
import { UsersApi } from "./services/users-api.js";
import { UsersRenderer } from "./components/users-renderer.js";

/**
 * Correction Révision 1
 *
 * document.querySelector("#hello")
 * Permet de récupérer l'element du DOM qui a pour id "hello"
 *
 * .addEventListener("click", () => alert("Bonjour"));
 * addEventListener est une méthode qui existe dans tous les element du DOM.
 * La ligne permet d'ajouter une fonction qui sera appellé lorsque l'on cliquera sur l'element
 * La fonction appeller est une fonction qui contient uniquement l'appel à la fonction alert.
 * La fonction alert est une fonction faisant aparaitre une boite de dialog.
 * Cette fonction stop le code tant qu'on ne ferme pas la boite de dialog.
 */
document
  .querySelector("#hello")
  .addEventListener("click", () => alert("Bonjour"));

/**
 * Test Révision 2
 * Ici on créer une instance de User, c'est un test pour vérifier que l'on a bien importer User
 */
const emptyUser = new User({ address: {} });
console.log("empty user = ", emptyUser);

/**
 * Correction révision 3
 * Ici on créer une instance de LoginAttemps, c'est un test pour vérifier que l'on a bien utiliser des valeurs par
 * défaut pour LoginAttemps
 */
const anonymous = new LoginAttemps();
console.log(anonymous);

/**
 * Correction révison 4
 * Ici on ajoute une fonction qui sera appellé à la soumition du formulaire ayant pour id "loginForm"
 */
const loginAttemps = [];
document.querySelector("form#loginForm").addEventListener("submit", (event) => {
  // Cette fonction permet d'annuler le comportement par défaut de l'évènement sur le formulaire
  event.preventDefault();
  // Un évènement ce propage normalement toujours à son parent (l'élément du DOM parent), cette fonction permet de stoper cette propagation
  event.stopPropagation();

  /**
   * event.target est l'élément du DOM où a eu lieu l'évènement, ici le formulaire ayant l'id "loginForm"
   * Ensuite avec .querySelector("input[name=username]") on récupère l'élément input du DOM ayant un attribut name qui est égal à username
   * Le .value permet de récupérer la valeur de cette input
   */
  const username = event.target.querySelector("input[name=username]").value;
  // Pareil avec password
  const password = event.target.querySelector("input[name=password]").value;
  // On ajoute l'instance dans un tableau qui a été définie en dehors du listener cela permet d'avoir une trace
  loginAttemps.push(new LoginAttemps(username, password));
  // On affiche dans la console sous la forme d'un tableaux la vairiable loginAttemps
  console.table(loginAttemps);
});

/**
 * Correction révison 5
 */
// créer l'instance de la class UsersApi
const api = new UsersApi();
/**
 * Utilise la méthode getUsers, cette méthode renvoie une promise.
 * Le .then permet d'ajouter une fonction qui sera appelé lorsque la promise sera résolue
 * Ici getUsers effectue une requête HTTP et lorsque celle ci ce termine,
 * elle résout la promise avec la liste des users contenu dans la réponse de la requête
 */
api.getUsers().then((users) => {
  // Création d'une instance de "UsersRenderer" avec le tableu d'utilisateurs renvoyé par getUsers
  const usersRenderer = new UsersRenderer(users);
  /**
   * On récupére l'element du DOM ayant pour id "users", on aurrait pu utilisé un querySelector
   * .innerHTML est le contenu de l'élément du DOM ici on le remplace par le retour de la méthode render du UsersRenderer
   */
  document.getElementById("users").innerHTML = usersRenderer.render();
});

/**
 * Ajout d'un callback au click sur le document directement
 * Etant donné que tous les évènements ce propage, ici on intercepte tous les click qui ce sont propagé.
 */
document.addEventListener("click", (event) => {
  // Correction révision 6
  // On vérifier que le click à eu lieu sur un élément qui à une class btn-show-detail
  if (event.target && event.target.classList.contains("btn-show-detail")) {
    // récupération de la valeur contenue dans l'attribut data-id
    const userId = event.target.dataset.id;
    // appelle à la fonction api.getDetailUser(userId) cette fonction renvoie une promise
    api
      .getDetailUser(userId)
      /**
       * à la résolution de la promise on affiche une alert avec le résultat
       * la fonction alert, arrète l'exécution du code tant que la boite de dialog n'est pas fini.
       */
      .then((res) => alert(JSON.stringify(res)))
      /**
       * après avoir fermer la boite de dialog précédente on lance une requête ajax grâce à la fonction fetch
       * le retour de la fonction est une promise, ici on revoit le retour (il n'y a pas de {} sur la fonction fléché)
       * en renvoyant le retour on chaine notre promise avec celle retourner par fetch
       */
      .then(() =>
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      )
      /**
       * à la résolution de la promise renvoyer par la fonction fetch on utilise la fonction json
       * La fonction fetch renvoie une promise est à la résolution renvoie un objet de type Response
       * L'objet Response à une méthode json qui permet de parser le résultat de type string est de renvoyé un objet litéral
       */
      .then((res) => res.json())
      .then((res) => alert(JSON.stringify(res)));
  }
  // Correction révision 7
  // On vérifier que le click à eu lieu sur un élément qui à une class btn-show-detail-all
  if (event.target && event.target.classList.contains("btn-show-detail-all")) {
    // récupération de la valeur contenue dans l'attribut data-id
    const userId = event.target.dataset.id;
    Promise.all([
      api.getDetailUser(userId),
      fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      ).then((res) => res.json()),
    ]).then(([responseDetailUser, responsePosts]) =>
      alert(JSON.stringify([responseDetailUser, responsePosts]))
    );
  }
});
