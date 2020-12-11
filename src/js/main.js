function clickHello(event) {
  console.log(event);
  alert("Bonjour");
}

document.querySelector("#hello").addEventListener("click", clickHello);

var count = 0;

function incremente() {
  count++;
  console.log(count);
  document.querySelector("#inc .value").innerHTML = count;
}

document.querySelector("#inc button").addEventListener("click", incremente);

var loginAttempts = [];

function submitForm(event) {
  event.preventDefault();
  event.stopPropagation();
  var values = Array.prototype.slice
    .call(event.target.querySelectorAll("input"))
    .map(function (element) {
      return element.value;
    });

  loginAttempts.push({
    username: values[0],
    password: values[1],
  });

  console.table(loginAttempts);
}
document.querySelector("#loginForm").addEventListener("submit", submitForm);
