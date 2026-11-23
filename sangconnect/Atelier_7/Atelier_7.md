# Atelier 7 : Authentification, JWT et gestion des utilisateurs

### Activité 1 :

Le rôle permet de définir les autorisations de chaque utilisateur.
    ADMIN : gérer les utilisateurs, les centres et toutes les ressources.
    AGENT_CENTRE : gérer les dons de son centre.
    RESPONSABLE_STOCK : gérer les stocks de sang.
Chaque utilisateur possède donc des droits adaptés à sa fonction.

### Activité 2 :

email @unique : empêcher deux utilisateurs d'avoir la même adresse email.
password String : stocker le mot de passe sous forme de texte, on stockera son hash, jamais le mot de passe en clair.
enum Role : limiter les rôles aux valeurs prédéfinies.
@default(AGENT_CENTRE) : attribuer automatiquement le rôle AGENT_CENTRE si aucun rôle n'est fourni.

### Activité 6 :

on peut pas retrouver le mot de passe original à partir du hash, parce que le hachage est une opération à sens unique. On peut vérifier un mot de passe, mais pas retrouver directement sa valeur originale.

### Activité 10 :

On ne peut pas exposer le hash du mot de passe, parce qu'un attaquant pourrait utiliser le hash pour tenter de retrouver le mot de passe original, notamment par des attaques hors ligne.

### Activité 14 : 

dans la colonne password on trouve Un hash Argon2, on ne doit jamais trouver Password123 directement.

### Activité 17 : 

ne pas écrire directement la clé dans le code, parce qu'une clé écrite dans le code pourrait être exposée si le projet est partagé ou publié. Une variable d'environnement permet de la garder séparée du code source.

### Activité 26 : 

Placer l'utilisateur dans req.user, pour permettre aux Controllers et aux autres middlewares d'accéder aux informations de l'utilisateur authentifié, notamment son identifiant et son rôle, sans refaire la vérification du token.

### Activité 27 : 

curl http://localhost:3000/api/auth/me -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiYWhtZWRAc2FuZ2Nvbm5lY3QudG4iLCJyb2xlIjoiQUdFTlRfQ0VOVFJFIiwiaWF0IjoxNzk1NDQyMDAyLCJleHAiOjE3OTU0NDU2MDJ9.vxnsNjXVobcfyJ3zg3Adbq6M_4wno-LLviLkLEv-tTc"

{"id":1,"nom":"Ahmed","email":"ahmed@sangconnect.tn","role":"AGENT_CENTRE"}

### Activité 29 :

401 : utilisateur non authentifié ou token invalide.
403 : utilisateur authentifié, mais non autorisé à effectuer l'opération.

### Activité 31 :

1. curl -i http://localhost:3000/api/dons
HTTP/1.1 401 Unauthorized

2. curl -i http://localhost:3000/api/dons \://localhost:3000/api/dons \
-H "Authorization: Bearer abc123"
HTTP/1.1 401 Unauthorized



