# Atelier 6 : Relations entre données et requêtes avancées

### Activité 1 : 

1. dons Don[] : Représente la relation entre un donneur et ses dons. Un donneur peut avoir plusieurs dons.
2. donneurId Int : C'est une clé étrangère qui stocke l'identifiant du donneur associé au don.
3. donneurId Int : stocke l'identifiant du donneur dans la base de données.
   donneur Donneur : représente l'objet donneur associé et permet d'accéder à ses informations.
4. @relation(fields: [donneurId], references: [id]) : Définit la relation entre les deux modèles :
   fields: [donneurId] : indique le champ qui contient la clé étrangère.
   references: [id] : indique le champ id du modèle Donneur auquel elle fait référence.

### Activité 3 :

1. Pourquoi donneurId est-il nécessaire ?
   Pour identifier le donneur associé à chaque don.
2. Pourquoi ne pas stocker directement le nom du donneur ?
   Pour éviter la duplication des données et faciliter leur mise à jour.
3. Que se passerait-il si nous supprimions la relation ?
   Onva perdre le lien entre les dons et leurs donneurs.
4. Quel avantage apporte une clé étrangère ?
   Elle garantit l'intégrité des données en empêchant les références vers des donneurs inexistants.

### Activité 4 : 

curl http://localhost:3000/apicurl http://localhost:3000/api/centres
[{"id":1,"nom":"Centre de Monastir","ville":"Monastir","adresse":"Avenue de l Indépendance","telephone":"73444555"},
{"id":2,"nom":"Centre régional de Sousse","ville":"Sousse","adresse":"Centre-ville","telephone":"73333444"},
{"id":3,"nom":"Centre régional de Tunis","ville":"Tunis","adresse":"Avenue Habib Bourguiba","telephone":"71111222"},
{"id":4,"nom":"Centre régional de Sfax","ville":"Sfax","adresse":"Route de Tunis","telephone":"74444555"}]

### Activité 5 :

1. donneurId: 1 : identifie le donneur auquel appartient le don (clé étrangère).
   centreId: 1 : identifie le centre dans lequel le don a été effectué (clé étrangère).

2. include est utilisée lorsqu'on souhaite récupérer les informations d'une relation, par exemple les informations du donneur et du centre associés à chaque don.

### Activité 7 :

* Il est intéressant de ne pas retourner systématiquement toutes les colonnes, pour :
    récupérer moins de données.
    réduire la quantité de données envoyées.
    éviter d'exposer des informations sensibles.
    retourner uniquement les informations nécessaires au client.

### Activité 8 :

* Don : rechercher les dons du donneur : on interroge directement la table Don avec donneurId.
   Donneur : charger ses dons : on recherche le donneur puis on récupère ses dons avec include.
La première approche récupère directement les dons, La deuxième récupère le donneur avec ses dons associés.

### Activité 9 :

* where: { donneur: { groupeSanguin: "A+" } } : permet de filtrer les dons selon le groupe sanguin du donneur associé, Prisma effectue le filtrage à travers la relation Don-Donneur.

### Activité 10 :

* centreId: 1 : filtre les dons effectués dans le centre dont l'identifiant est 1.
  centre: { ville: "Sousse" } : filtre les dons effectués dans tous les centres situés à Sousse.

### Activité 11 :

* asc (Ascending) : ordre croissant, du plus ancien au plus récent pour une date.
  desc (Descending) : ordre décroissant, du plus récent au plus ancien pour une date.

### Activité 15 :

* Retourner total avec les résultats paginés, pour connaître le nombre total de résultats disponibles et calculer le nombre de pages nécessaires, même si chaque page ne contient que 10 résultats.

### Activité 17 :

* le Repository est un bon endroit pour placer cette requête, parce qu'il centralise les requêtes d'accès à la base de données et les opérations Prisma.

### Activité 21 :

* L'approche B est préferable car elle utilise include pour récupérer les donneurs et leurs dons associés directement, évitant ainsi de multiplier les requêtes dans une boucle. Elle réduit les accès à la base de données.

### Activité 23 :

* Pour une API publique, je choisirais select, car il permet de sélectionner précisément les champs à retourner, de limiter les données transférées et de protéger les informations sensibles.