# Atelier 8 : Documentation d'une API REST avec Swagger et OpenAPI

### Question 1 :

1. l'API est documentée pour expliquer son fonctionnement et faciliter son utilisation par les développeurs.

2. OpenAPI est une spécification standard, Swagger est un ensemble d'outils qui l'utilisent.

3. Swagger UI affiche la documentation de l'API sous forme d'une interface interactive.

4. Informations d'un endpoint :Méthode HTTP, URL, paramètres, description, authentification et réponses possibles.

5. Tester une API depuis sa documentation pour tester les endpoints directement, vérifier les réponses et détecter les erreurs sans outil externe.

### Question 2 :

1. GET /api/donneurs :
- Objectif : Lister les donneurs.
- Paramètres : Filtres éventuels.
- Requête : Aucune.
- Réponses : 200 (succès), 500 (erreur serveur).
- Authentification : Selon la configuration de la route.
2. GET /api/donneurs/:id :
- Objectif : Consulter un donneur.
- Paramètres : id.
- Requête : Aucune.
- Réponses : 200 (succès), 404 (introuvable).
- Authentification : Selon la configuration de la route.
3. POST /api/donneurs :
- Objectif : Créer un donneur.
- Paramètres : Aucun.
- Requête : Informations du donneur en JSON.
- Réponses : 201 (créé), 400 (données invalides).
- Authentification : Selon la configuration de la route.
4. PUT /api/donneurs/:id :
- Objectif : Modifier un donneur.
- Paramètres : id.
- Requête : Informations complètes en JSON.
- Réponses : 200 (modifié), 404 (introuvable).
- Authentification : Selon la configuration de la route.
5. DELETE /api/donneurs/:id :
- Objectif : Supprimer un donneur.
- Paramètres : id.
- Requête : Aucune.
- Réponses : 204 (supprimé), 404 (introuvable).
- Authentification : Selon la configuration de la route.
6. POST /api/auth/login :
- Objectif : Connecter un utilisateur.
- Paramètres : Aucun.
- Requête : Email et mot de passe en JSON.
- Réponses : 200 (succès), 401 (identifiants incorrects).
- Authentification : Non.
7. GET /api/auth/me :
- Objectif : Consulter le profil de l'utilisateur connecté.
- Paramètres : Aucun.
- Requête : Aucune.
- Réponses : 200 (succès), 401 (non authentifié).
- Authentification : Oui, avec un token JWT.

### Question 8 :

Donneur représente un donneur complet, avec son identifiant.
CreateDonneur représente les données envoyées lors de sa création, sans identifiant puisque celui-ci est généré automatiquement par la base de données.
À retenir : un schéma décrit les données échangées avec l'API et peut être réutilisé dans plusieurs endpoints.