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

const loginAttempts = [];

document.querySelector("#loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  event.stopPropagation();
  const [username, password] = [...event.target.querySelectorAll("input")].map(
    (element) => element.value
  );

  loginAttempts.push({
    username,
    password,
  });
  // affichage console du tableau avec formatage
  console.table(loginAttempts);
});
