# Atelier 5 - Persistance des données avec Prisma et MySQL

### Question 1 :

1. MySQL : gérer la base de données, stocker et organiser les données de manière durable sur le port 3306 par défaut, pas les variables JavaScript, Parce qu'elles sont stockées en mémoire vive (RAM) et disparaissent lorsque le serveur Node.js s'arrête.

### Question 2 :

2. il est préférable d'utiliser un utilisateur MySQL dédié pour des raisons de sécurité, root possède tous les privilèges sur la base de données, un utilisateur dédié possède uniquement les droits nécessaires à l'application.

### Question 3 :

3. Une migration permet de modifier la structure de la base de données (crud) en appliquant les changements définis dans schema.prisma.

### Question 4 :

4. MySQL : système de gestion de base de données qui stocke réellement les données.
   Prisma Studio : interface graphique qui permet de visualiser, ajouter, modifier et supprimer les données de la base via Prisma.

### Question 5 :

5. On ne modifie pas directement la table MySQL, on execute une migration pour garder un historique des modifications.

### Exercice 1 : 

1. MySQL : système de gestion de base de données (stocke les données).
   Prisma : ORM qui permet à JavaScript de communiquer facilement avec la base de données (MySQL), sans écrire directement des requêtes SQL.

2. schema.prisma: Décrit la structure de la base de données : les tables (modèles), les champs et leurs types.
   Prisma Client : Permet à JavaScript de communiquer avec la base de données pour ajouter, modifier, supprimer et récupérer des données.
   Migration : Permet d'appliquer les changements du schema.prisma à la base de données (création ou modification des tables).

### Exercice 2 :

1. findAll() : récupérer tous les donneurs, findById() : récupérer un donneur par son ID, create() : ajouter un nouveau donneur, update() : modifier un donneur existant, remove() : supprimer un donneur.
Ne pas les placer directement dans le contrôleur pour séparer les responsabilités, repo contient les opérations sur la base de données et controller reçoit les requêtes HTTP, appelle le repository et renvoie les réponses.

### Activité 1 :

1. curl http://localhost:3000/api/donneurs
[{"id":1,"nom":"Ben Ali","prenom":"Ahmed","groupe_sanguin":"A+"},{"id":2,"nom":"Trabelsi","prenom":"Sami","groupe_sanguin":"O+"}]

2. curl http://localhost:3000/api/donneurs/1
{"id":1,"nom":"Ben Ali","prenom":"Ahmed","groupe_sanguin":"A+"}

3. curl -X POST http://localhost:3000/api/donneurs -H "Content-Type: application/json" -d '{
    "nom": "Khelifi",
    "prenom": "Yassine",
    "groupeSanguin": "AB+"
}'
{"id":3,"nom":"Khelifi","prenom":"Yassine","groupe_sanguin":"AB+"}

4.  curl -X PUT http://localhost:3000/api/donneurs/1 -H "Content-Type: application/json" -d '{
    "nom": "Ben Salem",
    "prenom": "Ahmed",
    "groupeSanguin": "A+"
}'
{"id":1,"nom":"Ben Salem","prenom":"Ahmed","groupe_sanguin":"A+"}

5. curl -i -X DELETE \
http://localhost:3000/api/donneurs/1
HTTP/1.1 204 No Content

6. curl -X POST http://localhost:3000/api/donneurs -H "Content-Type: application/json" -d '{
    "nom": "Mansouri",
    "prenom": "Amine",
    "groupeSanguin": "O+",
    "telephone": "73123456"
}'
{"id":5,"nom":"Mansouri","prenom":"Amine","groupe_sanguin":"O+","telephone":"73123456"}

7. curl "http://localhost:3000/api/donneurs?groupeSanguin=AB%2B"B"
[{"id":3,"nom":"Khelifi","prenom":"Yassine","groupe_sanguin":"AB+","telephone":null}]

8. curl "http://localhost:3000/api/donneurs?sort=nom"
[{"id":3,"nom":"Khelifi","prenom":"Yassine","groupe_sanguin":"AB+","telephone":null},{"id":4,"nom":"Mansouri","prenom":"Amine","groupe_sanguin":"O+","telephone":null},{"id":5,"nom":"Mansouri","prenom":"Amine","groupe_sanguin":"O+","telephone":"73123456"},{"id":2,"nom":"Trabelsi","prenom":"Sami","groupe_sanguin":"O+","telephone":null}]