# Atelier 4 - Validation des données et gestion des erreurs

### Activité 1 :

1. La dépendance Zod aparait dans le fichier packahe.json dans la section dependencies.
2. node src/test-zod.js
{ success: true, data: { nom: 'Ben Ali', prenom: 'Ahmed' } }
3. z.object({nom: z.string(),..}) : décrire la structure de l'objet (nom : chaine).
    schema.safeParse(donneur) : verification des données avec safePrase si valide success.

4. node src/validators/donneur.validator.js : avec données valides
=> true
node src/validators/donneur.validator.js : avec données non valides
=> false

5. console.log(resultat.error): nous permet de visualiiser les erreurs de validations
"message": "Invalid option: expected one of \"A+\"|\"A-\"|\"B+\"|\"B-\"|\"AB+\"|\"AB-\"|\"O+\"|\"O-\""
"message": "Too small: expected string to have >=2 characters"

6. En ajoutant le middleware de validation, il va detecter les données invalides et  
envoyer une erreur HTTP 400, donc il n'appelle pas next() pour passer au controlleur.

7. il est préferable de vérifier id avant l'appel pour eviter d'envoyer un identifiant invaalide au service et retourner une erreur http 400 avant l'execution du controleur.

8. .optional() on utilise optional car le groupe Sanguin n'est pas obliigatoire, on peut afficher les donneurs sans préciser leur groupe sanguin.

### Exercice 1 :

1. curl -i -X POST http://localhost:3000/api/donneurs \
-H "Content-Type: application/json" \
-d '{"nom":"Khelifi","prenom":"Yassine","groupeSanguin":"A+"}'
HTTP/1.1 201 Created

2. curl -i -X POST http://localhost:3000/api/donneurs -H "Content-Type: application/json" -d '{"nom":"A","prenom":"Yassine","groupeSanguin":"A+"}'
HTTP/1.1 400 Bad Request

{"message":"Données invalides","errors":[{"origin":"string","code":"too_small"}]}

3. curl -i -X POST http://localhost:3000/api/donneurs \
-H "Content-Type: application/json" \
-d '{"nom":"Khelifi","groupeSanguin":"A+"}'
HTTP/1.1 400 Bad Request

4. curl -i http://localhost:3000/api/donneurs/abc
HTTP/1.1 400 Bad Request

5. curl -i "http://localhost:3000/api/donneurs?groupeSanguin=XYZ"
HTTP/1.1 400 Bad Request

### Exercice 2 - Gestion centralisée des erreurs

curl -i http://localhost:3000/api/donneurs/999
HTTP/1.1 404 Not Found
{"message":"Donneur introuvable"}

curl http://localhost:3000curl http://localhost:3000/api/donneurs/1
{"id":1,"nom":"Ben Ali","prenom":"Ahmed","groupeSanguin":"A+"}

### Exercice 3,4 - Valider les centres

curl -i -X POST http://localhost:3000/api/centres \
-H "Content-Type: application/json" \
-d '{"nom":"Centre Régional de Sousse","ville":"Sousse","adresse":"Rue de la République","telephone":"73123456"}'
HTTP/1.1 201 Created

### Exercice 5 - Améliorer les messages d'erreur

url -i -X POST http://localhost:3000/api/centres \entres \
-H "Content-Type: application/json" \
-d '{"nom":"A","ville":"Sousse","adresse":"Rue de la République","telephone":"73123456"}'
HTTP/1.1 400 Bad Request

{"message":"Données invalides"}

### Exercice 6 - Validation d'un email

curl -i -X POST http://localhost:3000/api/donneurs -H "Content-Type: application/json" -d '{"nom":"Ahmed","prenom":"Ali","groupeSanguin":"A+","email":"email-invalide"}'
HTTP/1.1 400 Bad Request

{"message":"Données invalides","errors":[{"origin":"string","code":"invalid_format","format":"email","pattern":"/^(?:[A-Za-z0-9_'+\\-]+\\.)*[A-Za-z0-9_'+\\-]}]}

### Exercice 7 - Validation du numéro de téléphone

curl -i -X POST http://lcurl -i -X POST http://localhost:3000/api/donneurs \
-H "Content-Type: application/json" \
-d '{"nom":"Ahmed","prenom":"Ali","groupeSanguin":"A+","email":"ahmed@example.com","telephone":"23AB3456"}'
HTTP/1.1 400 Bad Request

{"message":"Données invalides","errors":[{"origin":"string","code":"invalid_format","format":"regex","pattern":"/^[0-9]{8}$/","path":["telephone"],"message":"Le numéro doit contenir exactement 8 chiffres"}]}