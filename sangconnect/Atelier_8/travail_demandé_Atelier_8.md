# Travail demandé :

1. Swagger et OpenAPI : OpenAPI est une spécification qui décrit une API REST. Swagger est un ensemble d'outils qui permet de créer et visualiser cette documentation.

2. swagger-jsdoc : Génère la documentation OpenAPI à partir des annotations présentes dans le code.

3. swagger-ui-express : Affiche la documentation Swagger dans une interface web interactive.

4. requestBody : Décrit les données envoyées dans le corps d'une requête, généralement en POST, PUT ou PATCH.

5. Path et Query : path identifie une ressource (/donneurs/5), tandis que query permet de filtrer ou trier (/donneurs?groupeSanguin=A+).

6. components.schemas : Contient les schémas réutilisables des objets de l'API.

7. $ref : Permet de réutiliser un schéma sans le redéfinir plusieurs fois.

8. securitySchemes : Définit les mécanismes d'authentification, comme JWT avec Bearer Token.

9. JWT et middleware : Swagger décrit et transmet le token, mais seul le middleware Express vérifie sa validité et autorise l'accès.

10. Erreurs HTTP : Elles permettent aux développeurs de comprendre les problèmes et de gérer correctement les réponses de l'API.

11. Documentation automatique et manuelle : La documentation automatique est générée à partir des annotations du code. La documentation manuelle est rédigée séparément.

12. Mise à jour : Pour éviter les différences entre la documentation et le fonctionnement réel de l'API.