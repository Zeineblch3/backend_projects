# Travail demandé 

## Exercice 2 : CRUD SangConnect

1. curl http://localhost:3000/api/donneurs

[{"id":1,"nom":"Ben Ali","prenom":"Ahmed","groupeSanguin":"A+"},{"id":2,"nom":"Trabelsi","prenom":"Sami","groupeSanguin":"O+"}]

2. curl "http://localhost:3000/api/donneurs/1"

{"id":1,"nom":"Ben Ali","prenom":"Ahmed","groupeSanguin":"A+"}

3. curl -X POST http://localhost:3000/api/donneurs -H "Content-Type: application/json" -d '{"nom":  "lach","prenom": "zeineb", "groupeSanguin": "B+"}'

{"id":3,"nom": "lach","prenom": "zeineb", "groupeSanguin": "B+"}

4. curl -X PUT http://localhost:3000/api/donneurs/3 -H "Content-Type: application/json" -d '
{"nom":"lallouch","prenom":"zeineb","groupeSanguin":"O-"}'

{"id":3,"nom":"lallouch","prenom":"zeineb","groupeSanguin":"O-"}

5. curl -X PATCH http://localhost:3000/api/donneurs/2 -H "Content-Type: application/json" -d '{"nom":"letaif"}'

{"id":2,"nom":"letaif","prenom":"omar","groupeSanguin":"B+}

6. curl -i -X DELETE http://localhost:3000/api/donneurs/2

HTTP/1.1 204 No Content
X-Powered-By: Express
Date: Tue, 13 Oct 2026 16:33:58 GMT
Connection: keep-alive
Keep-Alive: timeout=5

7. curl http://localhost:3000/api/donneurs

[{"id":1,"nom":"Ben Ali","prenom":"Ahmed","groupeSanguin":"A+"},{"id":3,"nom":"lallouch","prenom":"zeineb","groupeSanguin":"O-"}]

## Exercice 3 : Recherche par GroupSanguin

1. curl "http://localhost:3000/api/donneurs?groupeSanguin=A%2B"

[{"id":1,"nom":"Ben Ali","prenom":"Ahmed","groupeSanguin":"A+"}]

2. La logique filtre doit etre placée dasn le service, car il est responsable du traitement des données.

## Exercice 4 : Validation

1. curl -X POST http://localhost:3000/api/donneurs \ -H "Content-Type: application/json" \ -d '{"nom":"Khelifi","groupeSanguin":"AB+"}'

{"message":"Données invalides"}

2. La validation manuelle devient difficile toute fois que le projet grandit, il faut écrire beaucoup des conditions à vérifier.

## Travail Demandé : API REST des centres de collecte

1. curl http://localhost:3000/api/centres

[{"id":1,"nom":"Centre de Tunis","ville":"Tunis","adresse":"Avenue Habib Bourguiba","telephone":"71111222"},{"id":2,"nom":"Centre de Sousse","ville":"Sousse","adresse":"Boulevard de la République","telephone":"73333444"},{"id":3,"nom":"Centre de Sfax","ville":"Sfax","adresse":"Route de Tunis","telephone":"74444555"}]

2. curl http://localhost:3000/api/centres/1

{"id":1,"nom":"Centre de Tunis","ville":"Tunis","adresse":"Avenue Habib Bourguiba","telephone":"71111222"}

3. curl "http://localhost:3000/api/centres?ville=Sousse"

[{"id":2,"nom":"Centre de Sousse","ville":"Sousse","adresse":"Boulevard de la République","telephone":"73333444"}]

4. curl -X POST http://localhost:3000/api/centres -H "Content-Type: application/json" -d "{\"nom\":\"Centre de Monastir\",\"ville\":\"Monastir\",\"adresse\":\"Avenue de l'Environnement\",\"telephone\":\"73444555\"}"555\"

{"id":4,"nom":"Centre de Monastir","ville":"Monastir","adresse":"Avenue de l'Environnement","telephone":"73444555"}

5. curl -X PUT http://localhost:3000/api/centres/1 -H "Content-Type: application/json" -d "{\"nom\":\"Centre Tunis Modifie\",\"ville\":\"Tunis\",\"adresse\":\"Nouvelle adresse\",\"telephone\":\"71123456\"}"3456\"

{"id":1,"nom":"Centre Tunis Modifie","ville":"Tunis","adresse":"Nouvelle adresse","telephone":"71123456"}

6. curl -X PATCH http://localhost:3000/api/centres/2 -H "Content-Type: application/json" -d "{\"telephone\":\"73111222\"}"

{"id":2,"nom":"Centre de Sousse","ville":"Sousse","adresse":"Boulevard de la République","telephone":"73111222"}

7. curl -i -X DELETE http://localhost:3000/api/centres/3res/3

HTTP/1.1 204 No Content
X-Powered-By: Express
Date: Tue, 13 Oct 2026 17:26:53 GMT
Connection: keep-alive
Keep-Alive: timeout=5

8. curl -i http://localhost:3000/api/centres/99

HTTP/1.1 404 Not Found
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 32
ETag: W/"20-72D7t0dJ3YFLA6nCQE0uok2XVrQ"
Date: Tue, 13 Oct 2026 17:27:16 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"message":"Centre introuvable"}

## Questions de réflexion

1. Cette séparation permet de mieux organiser le code et de faciliter sa maintenance.