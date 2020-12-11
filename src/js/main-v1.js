function clickHello() {
  // affiche une boite de dialogue qui affiche Bonjour
  alert("Bonjour");
}
// ajoute l'apelle de la fonction clickHello au click sur l'element avec l'id hello
document.querySelector("#hello").addEventListener("click", clickHello);

var count = 0;

function incremente() {
  // increment count de 1 equivalent a count = count + 1
  count++;
  console.log(count);
  // remplace le html de l'element ayant la class value dans un element avec l'id inc
  document.querySelector("#inc .value").innerHTML = count;
}
// ajoute l'apelle de la fonction incremente au click sur le boutton contenu dans un element avec l'id inc
document.querySelector("#inc button").addEventListener("click", incremente);

var loginAttempts = [];

function submitForm(event) {
  // utilise la fonction preventDefault voir https://developer.mozilla.org/fr/docs/Web/API/Event/preventDefault
  event.preventDefault();
  //https://developer.mozilla.org/fr/docs/Web/API/Event/stopPropagation
  event.stopPropagation();

  // function a ne jamais utiliser Array.prototype.slice.call vielle méthode qui permet de transformer mon NodeList en Array
  var values = Array.prototype.slice
    .call(event.target.querySelectorAll("input"))
    // map function de Array permettant de modifier tous les items d'un tableau avec une fonction
    .map(function (element) {
      return element.value;
    });
  // ajoute l'objet dans le tableau loginAttempts

  var attempts = {
    username: values[0],
    password: values[1],
  };

  loginAttempts.push(attempts);

  // affichage console du tableau avec formatage
  console.table(loginAttempts);
}
// ajoute l'apelle de la fonction submitForm au submit de l'element loginForm
document.querySelector("#loginForm").addEventListener("submit", submitForm);
