Atelier 1 - Découverte de Node.js et cycle de vie HTTP

Activité 1 :

1. Version node.js : v22.22.1
2. Version npm : 9.2.0
3. Chemin de node : /usr/bin/node
4. Chemin de npm : /usr/bin/npm

Activité 2 :

1. Le champ name définit le nom du projet
2. Le champ version indique la version du projet
3. Section scripts permet de définir les commandes d'exécution
4. package.json décrit le projet les dépendances et les commandes pour faciliter l'installation
5. Le code d'application réalise les fonctionnalités du projet et la configuration du projet définit les régles les dépendances ...
6. "type": "module" permet d'utiliser les modules ES
7. import { fonction } from './module.js';
8. export function F() {}
9. .js permet de localiser le fichier importé l'extension n'est pas importée automatiquement

Activité 4 :

1. const déclare une variable qui ne peut pas etre redéfinie alors que let permet de modifier sa valeur
2. const évite les réaffectations accidentelles

Activité 5 :

1. http.createServer() crée un serveur HTTP
2. (req,res)=>{...} éxecutée chaque fois qu'une req http arrive
3. req contient les infos de la req client et res construit et envoie la réponse
4. res.writeHead() définit le code de statut et les en-tetes se la réponse
5. res.end() termine et envoie la réponse
6. si le port 3000 est déjà utilisé node génére une erreur 

Activité 6 :

1. req.method permet de connaitre la méthode http
2. req.url permet de connaitre l'url demandé
3. req.method envoie GET
4. return arréte l'exécution pour ne pas continuer vers les autres routes
5. 404 doit etre placé aprés les routes connues sinon elle va etre éxecutée tout de début
6. une route non définie le serveur envoie route non trouvée
7. oui , une meme url peut etre utilisé avec plusieurs methodes
8. Content-Type indique le format des données envoyées dans la réponse
9. regrouper les instructions dans une fonction évite la répitition 
10. la fonction doit recevoir res statusCose et data
11. /api/health envoie 200 , une route inéxistante envoie 404

Activité 7 : 

curl -i http://localhost:3000/api/diagnostic
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Date: Mon, 28 Sep 2026 00:02:27 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked

curl -i http://localhost:3000/api/health
HTTP/1.1 200 OK

curl -i http://localhost:3000/api/info
HTTP/1.1 200 OK

curl -i -X POST  http://localhost:3000/api/diagnostic
HTTP/1.1 405 Method Not Allowed
{"error":"Méthode non autorisée","method":"POST","allowedMethods":["GET"]}

curl -i http://localhost:3000/api/inconnue
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
Date: Mon, 28 Sep 2026 00:07:23 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked

{"error":"Route non trouvée","path":"/api/inconnue","method":"GET","timestamp":"2026-09-28T00}

1. l'option -i permet d'afficher les en-tetes HTTP 
2. on utilise la route /health pour vérifier si le serveur est opérationnel, elle doit etre rapide 
3. vérification de disponibilité vérifie que le serveur répond mais la vérification compléte vérifie aussi l'état et les dépendances

Activité 9 :

1. server.js démarre le serveur et gére les req http
2. 30 routes rendent l'app long et difficile à organiser
3. pour diviser les routes on peut créer des fichiers routes health.js info.js
4. server.js : démarrage
   routes/ : gestion routes
   controller/ : logique req
   service/ : logique metier

sedJson() : permet d'envoyer une réponse HTTP au format JSON, elle doit recevoir res , statusCode et data 

Atelier 2 - Modules, Programmation asynchrone et Architecture en couches

Activité 1 : 

1. Si server.js devient long et difficile à parcourir, il ne sera pas facile de retrouver la fonction responsable de la recherche d'un centre.
2. Si plusieurs fichiers ont besoin de getCentreById() il faut recopier la fonction cela crée des répetitions.
3. Placer cette fonction dans un fichier séparé sert à la réutiliser plusieurs fois  sans répetition.
4. Un module regroupe des fonctions liées dans un fichier séparé puis l'exporter et importer selon besoin.

Activité 2 :

node src/server.js => Centre Tunis - Tunis

Activité 3 :

1. les accolades servent à importer une fonction exportée avec son nom depuis un module.
2. Oui, on peut exporter plusieurs fonctions depuis un meme fichier.

Activité 4 :

Restarting 'src/server.js'
Début
Fin
Opération terminée

1. "Fin" apparait avant "Opération terminée" car setTimeout() programme l'opération pour plus tard.
2. Non, le programme ,n'est pas bloqué il continue son exécution pendant ces deux secondes.
3. Une opération programmée avec setTimeout() est asynchrone qui sera exécutée après le délai.
4. Ce comportement permet le serveur de traiter les autres demandes pendant qu'une prend du temps.

Activité 5 :

Restarting 'src/server.js'
Centre récupéré

1. Au début, Promise est en état pending (en attente).
2. resolve() indique que l'opération est réussie et fournit la res "Centre récupéré".
3. reject() indique que l'opération a échoué et fournit une erreur.
4. Aprés une seconde, resole() est exécutée puis .then() affiche le message dans la console.
5. .then() récupére et traite le résultat lorsqu'elle est terminée.

Activité 6 :

Promise Réussie : 

Restarting 'src/server.js'
{ id: 1, nom: 'Centre Tunis', ville: 'Tunis' }

Promise rejetée :

estarting 'src/server.js'
Impossible de récupérer le centre

Activité 7 :

1. async indique qu'une fonction est asynchrone , qu'elle retourne une Promise.
2. await permet d'attendre le résultat d'une Promise avant de continuer l'exécution.
3. await ne bloque pas le serveur , il met seulement en pause la fonction asynchrone concernée.
4. si Promise est rejetée une erreur est génerée, on peut la gérer avec try..catch.

Activité 8 :

Restarting 'src/server.js'
Erreur : Centre indisponible

1. try contient le code qui peut provoquer une erreur.
2. catch récupére et traite l'erreur.
3. error contient l'erreur
4. on ne doit pas laisser les erreurs async sans traitement car elles peuvent provoquer un lantage de programme.

Activité 9 : 

1. Les données sont stockés sous centre.repository.js dasn un tableau centres.
2. ce fichier est appelé repository car il occupe de l'accès aux données: rechercher tous les centres ou par id.
3. Non, le repo ne s'occupe pas de HTTP.
4. Non, req et res appartiennent à la partie qui gére les requetes et les réponses HTTP ils n'ont aucun rapport avec le repo.
5. cette séparation permet de diviser les reponsabilités donc avoir un code clair.

Activité 10 : 

1. le Service contient la logique métier de l'application.
2. le service utilise le repository pour récupérer les données.
3. le service ne manipule pas directement res , car res appartient à la partie HTTP, le service doit rester indépendant de HTTP.
4. une règle métier doit etre dans le service.
5. on sépare le service du repo car le repo gére les données et le service gére la logique.

Activité 11 :

1. le Controller fait le lien entre HTTP et la logique métier, il reçoit la req et prépare la res.
2. le controleur connait le HTTP car il utilise req et res pour la gestion.
3. il appelle le service car il contient la logique métier, il lui demande d'effectuer le traitement.
4. le service doit appeler senJson() parce qu'il concerne HTTP, le service doit rester indépendant.
5. l'erreur "Centre Introuvable" est détectée dans le serviceavec throw puis gérée par le controleur avec catch.

Activité 12 :

1. handleCentreRoutes() permet de reconnaitre les URLs et appeler le controleur correspondant.
2. elle retourne true (la route été trouvée et traitée) , ou false (aucune route trouvée)
3. match[1] est l'ID du centre récupéré depuis URL.
4. Number() transforme match[1] (chaine) en nombre pour pouvoir chercher l'id.
5. /api/centres :récupére tous les centres , /api/centres/1 :récupére un centre précis.

Activité 13 + 14 :

1. curl -i http://localhost:3000/api/centres

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Date: Mon, 28 Sep 2026 11:42:47 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked

{"data":[{"id":1,"nom":"Centre de transfusion de Tunis","ville":"Tunis"},{"id":12,"nom":"Centre régional de Sousse","ville":"Sousse"},{"id":3,"nom":"Centre régional de Sfax","ville":"Sfax"}]}

2. curl -i http://localhost:3000/api/centres/1

Content-Type: application/json; charset=utf-8
Date: Mon, 28 Sep 2026 11:50:17 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked

{"data":{"id":1,"nom":"Centre de transfusion de Tunis","ville":"Tunis"}}

3. curl -i http://localhost:3000/api/centres/99

HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
Date: Mon, 28 Sep 2026 11:51:35 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked

{"error":"Centre introuvable"}

4. le couche route reçoit la rq HTTP en premier et détermine quel controleur a appeler.
5. Oui, on peut remplacer les données par une base de données, il suffit de modifier le repo pour récupérer des données depuis une base de données.

Activité 15 : 

1. la vérification if(!city || city.trim() === "") doit se trouver dans le service plutot que dans le repo car le service verifie les regles métier er les données reçues.

Activité 16 :

1. Si on modifie findAll() avec un throw error:
curl -i http://localhost:3000/api/centres
HTTP/1.1 500 Internal Server Error
Content-Type: application/json; charset=utf-8
Date: Mon, 28 Sep 2026 12:12:09 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked

{"error":"Erreur interne du serveur"}
2. la couche repo génére l'erreur.
3. la couche controleur la récupére dans le bloc try..catch.
4. il faut pas retourner le message technique complet car il peut contenir des informations sensibles.

Activité 18 - Questions de synthése

1. async function vs function : async permet à la fonction de retourner une promise et utiliser await.
2. const res=await op(); vs op().then(res=>{}) : les deux attendent le res d'une promise mais await utilise une syntaxe simple.
3. 3 états principaux d'une promise : pending, fulfilled, rejected.
4. try/catch permet de récupérer et gérer les erreurs produites par une opération async.
5. on peut remplacer le repo pour utiliser Postgres.

Travail Demandé : 

1. curl -i http://localhost:3000/api/donneurs
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Date: Mon, 28 Sep 2026 17:35:28 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked

{"data":[{"id":1,"nom":"ben ali","prenom":"ahmed","groupeSanguin":"O+","ville":"Tunis"},{"id":2,"nom":"kacem","prenom":"omar","groupeSanguin":"O-","ville":"Tunis"},{"id":3,"nom":"lallouch","prenom":"zeineb","groupeSanguin":"A+","ville":"Sousse"},{"id":4,"nom":"ameri","prenom":"meriem","groupeSanguin":"B+","ville":"kairouan"},{"id":5,"nom":"rawen","prenom":"arfaoui","groupeSanguin":"A+","ville":"Tunis"}]}

2. curl -i http://localhost:3000/api/donneurs/2
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Date: Mon, 28 Sep 2026 17:40:58 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked

{"data":{"id":2,"nom":"kacem","prenom":"omar","groupeSanguin":"O-","ville":"Tunis"}}

3. curl -i http://localhost:3000/api/donneurs/100
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
Date: Mon, 28 Sep 2026 17:45:30 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked

{"error":"Donneur introuvable"}

4. curl -i http://localhost:3000/api/donneurs?ville=sousse
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Date: Mon, 28 Sep 2026 18:25:28 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked

{"data":[{"id":3,"nom":"lallouch","prenom":"zeineb","groupeSanguin":"A+","ville":"Sousse"}]}
