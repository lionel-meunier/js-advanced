# Exercice Révision 1

Ajouter un bouton hello et au click il dit bonjour

# Exercice Révision 2

Créer les class Address et User dans des fichiers src/app/models/user.js et src/app/models/address.js
Et utiliser les dans main.js.

```
const emptyUser = new User({address:{}});
console.log(emptyUser);
```

# Exercice Révision 3

Créer une class LoginAttemps avec username et password.
Par défaut username = 'Anonyme';
Par défaut password = 'crypted';

Pour tester dans le main.js

```
const anonymous = new LoginAttemps();
console.log(anonymous);
```

# Exercice Révision 4

Créer un formulaire de login avec un champ username et un champ mots de passe. (Récupérer dans le old.html si vous voulez vous simplifier)

Au submit :

- stoper l'event (la page et sont url ne doit pas changer)
- créer l'instance LoginAttemps avec les valeur du formulaire et stocker la tentative de connection
- afficher toutes les tentative grace à console.table

# Exercice Révision 5

Récuperer les class UserRenderer et UsersRenderer pour les mettre dans deux fichier

- app/components/user.js pour UserRenderer
- app/components/users.js pour UsersRenderer

Récupérer la class UsersApi pour la mettre dans un fichier

- app/services/users-api.js

Et utiliser le script suivant dans main.js

```
const api = new UsersApi();
api.getUsers().then((users) => {
  const usersRenderer = new UsersRenderer(users);
  document.getElementById("users").innerHTML = usersRenderer.render();
});
```

Faire en sorte que cela créer le tableaux des utilisateurs.

# Exercice 6

Maintenant on va mettre un event au click sur le bouton contenu dans la ligne utilisateurs.

```
document.addEventListener("click", (event) => {
  if (event.target && event.target.classList.contains("btn-show-detail")) {
    // Mon code
  }
});
```

Dans un premier temps allez chercher le détail de l'utilisateur.
Afficher le dans une alert.

Ensuite allez récupérer les post de cette utilisateur.
Utiliser l'url : "https://jsonplaceholder.typicode.com/posts?userId=:id" en remplacant :id par l'id de l'utilisateur.

Afficher la liste dans une alert.
Utiliser "Leonard Walsh" pour tester les post

# Exercice 7

Au final il faut allez chercher les deux informations au même moments.
Et les afficher dans la même alert.
