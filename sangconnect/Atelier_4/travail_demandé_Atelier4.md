# Travail demandé 

1. curl -i http://localhost:3000/api/centres
HTTP/1.1 200 OK

[{"id":1,"nom":"Centre de Tunis","ville":"Tunis","adresse":"Avenue Habib Bourguiba","telephone":"71111222"},{"id":2,"nom":"Centre de Sousse","ville":"Sousse","adresse":"Boulevard de la République","telephone":"73333444"},{"id":3,"nom":"Centre de Sfax","ville":"Sfax","adresse":"Route de Tunis","telephone":"74444555"}]

2. curl -i "http://localhost:3000/api/centres?ville=Sousse"
HTTP/1.1 200 OK

[{"id":2,"nom":"Centre de Sousse","ville":"Sousse","adresse":"Boulevard de la République","telephone":"73333444"}]

3. curl -i "http://localhost:3000/api/centres?ville=A"ille=A"
HTTP/1.1 400 Bad Request

{"message":"Données invalides","errors":[{"origin":"string","code":"too_small","minimum":2,"inclusive":true,"path":["ville"],"message":"Too small: expected string to have >=2 characters"}]}

4. curl -i http://localhost:3000/api/centres/1
HTTP/1.1 200 OK

{"id":1,"nom":"Centre de Tunis","ville":"Tunis","adresse":"Avenue Habib Bourguiba","telephone":"71111222"}

5. curl -i -X POST http://localhost:3000/api/centres \
-H "Content-Type: application/json" \
-d '{"nom":"Centre de Monastir","ville":"Monastir","adresse":"Avenue Farhat Hached","telephone":"73456789"}'
HTTP/1.1 201 Created

6. curl -i -X PUT http://localhost:3000/api/centres/1 \1 \
-H "Content-Type: application/json" \
-d '{"nom":"Centre Tunis Modifié","ville":"Tunis","adresse":"Rue de Tunis","telephone":"71123456"}'
HTTP/1.1 200 OK

{"id":1,"nom":"Centre Tunis Modifié","ville":"Tunis","adresse":"Rue de Tunis","telephone":"71123456"}

7. curl -i -X DELETE http://localhost:3000/api/centres/1
HTTP/1.1 404 Not Found

{"message":"Centre introuvable"}

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