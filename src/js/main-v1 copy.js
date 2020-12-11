// ajoute l'apelle de la fonction clickHello au click sur l'element avec l'id hello
document
  .querySelector("#hello")
  .addEventListener("click", () => alert("Bonjour"));

var count = 0;

// ajoute l'apelle de la fonction incremente au click sur le boutton contenu dans un element avec l'id inc
document.querySelector("#inc button").addEventListener("click", () => {
  // increment count de 1 equivalent a count = count + 1
  count++;
  console.log(count);
  // remplace le html de l'element ayant la class value dans un element avec l'id inc
  document.querySelector("#inc .value").innerHTML = count;
});

var loginAttempts = [];

// ajoute l'apelle de la fonction submitForm au submit de l'element loginForm
document.querySelector("#loginForm").addEventListener("submit", (event) => {
  // utilise la fonction preventDefault voir https://developer.mozilla.org/fr/docs/Web/API/Event/preventDefault
  event.preventDefault();
  //https://developer.mozilla.org/fr/docs/Web/API/Event/stopPropagation
  event.stopPropagation();
  // ajoute l'objet dans le tableau loginAttempts
  const [username, password] = [...event.target.querySelectorAll("input")]
    // map function de Array permettant de modifier tous les items d'un tableau avec une fonction
    .map((element) => element.value);
  ts.push({
    username,
    password,
  });

  // affichage console du tableau avec formatage
  console.table(loginAttempts);
});
