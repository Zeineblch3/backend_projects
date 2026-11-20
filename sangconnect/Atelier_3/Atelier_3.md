# Atelier 3 - Concevoir et implémenter une APIREST avec node et express

### Activité 1 :

1. npm init -y : crée le fichier package.json.
   npm install express : gérer automatiquement la méthode HTTP et l'URL.
2. dans le fichier package.json, la section "dependencies" apparait.
3. La dépendence "express" contient express, qui correspond au framework Express.js  pour créer des serveurs et gérer les routes http avec node.
4. Express est enregistré dans "dependencies" car express est nécessaire au fonctionnement de l'application. Il est déclaré donc parmi les dépendences à installer.

### Activité 2 :

1. res.send(...): envoie une réponse au client sous forme de texte, html ou autre.
2. res.json(...): envoie une réponse au format JSON, et convertit automatiquement l'objet js en json.

### Activité 3 :
1. pour /api/donneurs/1 => req.params.id contient "1".
   pour /api/donneurs/25 => req.params.id contient "25".
2. Number() rend l'id de "type": "number".
3. curl http://localhost:3000/api/donneurs/2
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 75
ETag: W/"4b-lDYMHIJUmk1pkLVFc7rILIWiB2U"
Date: Mon, 12 Oct 2026 15:22:53 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"id":2,"nom":"kacem","prenom":"omar","groupeSanguin":"O-","ville":"Tunis"}

4. curl -i http://localhost:3000/api/donneurs/100
HTTP/1.1 404 Not Found
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 33
ETag: W/"21-bw5tvmDSI+5fYG/CBdZiZfWOsBQ"
Date: Mon, 12 Oct 2026 15:21:00 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"message":"Donneur introuvable"}

5. curl http://localhost:3000/api/donneurs?groupeSanguin=A%2B
[{"id":3,"nom":"lallouch","prenom":"zeineb","groupeSanguin":"A+","ville":"Sousse"}]

6. req.params : récupère les paramètres définis dans la route "/api/donneurs/2".
   req.query : récupère les paramétres après ? dans l'URL "/api/donneurs?groupe=A%2B".

7. curl -X POST http://localhost:3000/api/donneurs -H "Content-Type: application/json" -d '{"nom":  "lach","prenom": "zeineb", "groupeSanguin": "B+"}'

{"id":4,"nom":"lach","prenom":"zeineb","groupeSanguin":"B+"}

8. req.body récupére les données envoyées par le client dans le corps de la requéte.
9. express.json() permet à express de lire et convertir le json reçu en objet js accessible via req.body.
10. Code 201 indique que la ressource a été créée avec succès.
11. Code 200 indique que la requete a réussi.

12. curl -X PUT http://localhost:3000/api/donneurs/3 -H "Content-Type: application/json" -d '{"nom":"lallouch","prenom":"zeineb","groupeSanguin":"O-"}'

{"id":3,"nom":"lallouch","prenom":"zeineb","groupeSanguin":"O-","ville":"Sousse"}

13. curl -X PATCH http://localhost:3000/api/donneurs/2 -H "Content-Type: application/json" -d '{"nom":"letaif"}'

{"id":2,"nom":"letaif","prenom":"omar","groupeSanguin":"B+","ville":"Tunis"}

14. curl -i -X DELETE http://localhost:3000/api/donneurs/2
HTTP/1.1 204 No Content
X-Powered-By: Express
Date: Tue, 13 Oct 2026 15:47:16 GMT
Connection: keep-alive
Keep-Alive: timeout=5
