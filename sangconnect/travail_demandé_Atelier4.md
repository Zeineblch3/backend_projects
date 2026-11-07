# Travail demandé 

### Question 1 : Pourquoi ne faut-il pas faire toute la validation dans le contrôleur ?

Pour séparer les responsabilités et garder un contrôleur simple. Le middleware s'occupe de la validation.

### Question 2 : Quelle est la différence entre validation et logique métier ?

- **Validation :** vérifier que les données sont correctes.
- **Logique métier :** appliquer les règles de fonctionnement de l'application.

### Question 3 : Quel est l'intérêt d'un middleware générique `validate(schema, source)` ?

Il permet de réutiliser le même code pour valider différentes données (`body`, `params`, `query`).

### Question 4 : Pourquoi centraliser la gestion des erreurs ?

Pour éviter de répéter le même code et avoir des réponses d'erreur uniformes.

### Question 5 : Quelle couche sera ajoutée dans l'Atelier 5 ?

La couche **DAO (Data Access Object)** pour communiquer avec une base de données au lieu de stocker les données en mémoire.