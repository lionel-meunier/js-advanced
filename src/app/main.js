import { User } from "./models/user.js";
import { LoginAttemps } from "./models/login-attemps.js";
import { UsersApi } from "./services/users-api.js";
import { UsersRenderer } from "./components/users-renderer.js";

/**
 * Correction Révision 1
 */
document
  .querySelector("#hello")
  .addEventListener("click", () => alert("Bonjour"));

/**
 * Test Révision 2 (qui n'est pas une révision) import et export
 */
const emptyUser = new User({ address: {} });
console.log("empty user = ", emptyUser);

/**
 * Correction révision 3
 */
const anonymous = new LoginAttemps("toto");
console.log(anonymous);
const loginAttemps = [];

/**
 * Correction révison 4
 */
document.querySelector("form#loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  event.stopPropagation();
  const username = event.target.querySelector("input[name=username]").value;
  const password = event.target.querySelector("input[name=password]").value;
  loginAttemps.push(new LoginAttemps(username, password));
  console.table(loginAttemps);
});

/**
 * Correction révison 5
 */
const api = new UsersApi();
api.getUsers().then((users) => {
  const usersRenderer = new UsersRenderer(users);
  document.getElementById("users").innerHTML = usersRenderer.render();
});

document.addEventListener("click", (event) => {
  // Correction révision 6
  if (event.target && event.target.classList.contains("btn-show-detail")) {
    const userId = event.target.dataset.id;
    api
      .getDetailUser(userId)
      .then((res) => alert(JSON.stringify(res)))
      .then(() =>
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      )
      .then((res) => res.json())
      .then((res) => alert(JSON.stringify(res)));
  }
  // Correction révision 7
  if (event.target && event.target.classList.contains("btn-show-detail-all")) {
    const userId = event.target.dataset.id;
    Promise.all([
      api.getDetailUser(userId),
      fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      ).then((res) => res.json()),
    ]).then((res) => alert(JSON.stringify(res)));
  }
});
