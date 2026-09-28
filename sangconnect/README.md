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




