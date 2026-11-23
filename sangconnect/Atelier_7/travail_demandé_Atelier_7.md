# Travail demandé 

1. curl -i -X POST http://localhost:3000/api/auth/register \
-H "Content-Type: application/json" \
-d '{
  "nom": "Test User",
  "email": "test@sangconnect.tn",
  "password": "Password123"
}'

HTTP/1.1 201 Created
{"id":2,"nom":"Test User","email":"test@sangconnect.tn","role":"AGENT_CENTRE"}

2. curl -i -X POST http://localhost:3000/api/auth/login \
-H "Content-Type: application/json" \
-d '{
  "email": "ahmed@sangconnect.tn",
  "password": "WrongPassword123"
}'

HTTP/1.1 401 Unauthorized
{"message":"Email ou mot de passe incorrect"}

3. curl -i -X POST http://localhost:3000/api/auth/login \X POST http://localhost:3000/api/auth/login \
-H "Content-Type: application/json" \
-d '{
  "email": "inexistant@sangconnect.tn",
  "password": "Password123"
}'

HTTP/1.1 401 Unauthorized
{"message":"Email ou mot de passe incorrect"}

4. curl -i -X POST http://localhost:3000/api/auth/login \X POST http://localhost:3000/api/auth/login \
-H "Content-Type: application/json" \
-d '{
  "email": "ahmed@sangconnect.tn",
  "password": "Password123"
}'

HTTP/1.1 200 OK
{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiYWhtZWRAc2FuZ2Nvbm5lY3QudG4iLCJyb2xlIjoiQUdFTlRfQ0VOVFJFIiwiaWF0IjoxNzk1NDQzODg4LCJleHAiOjE3OTU0NDc0ODh9.OWsnTIeNe4PDtQe5AqD5IDyVirHyfg9n4HYF7SR1gto","user":{"id":1,"nom":"Ahmed","email":"ahmed@sangconnect.tn","role":"AGENT_CENTRE"}}

5. curl -i http://localhost:3000/api/auth/me

HTTP/1.1 401 Unauthorized
{"message":"Token manquant"}

6. curl -i http://localhost:3000/api/auth/me \localhost:3000/api/auth/me \
-H "Authorization: Bearer faux_token_123"

HTTP/1.1 401 Unauthorized
{"message":"jwt malformed"}

7. curl -i -X DELETE http://localhost:3000/api/dons/2 \localhost:3000/api/dons/2 \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiYWhtZWRAc2FuZ2Nvbm5lY3QudG4iLCJyb2xlIjoiQUdFTlRfQ0VOVFJFIiwiaWF0IjoxNzk1NDQzODg4LCJleHAiOjE3OTU0
NDc0ODh9.OWsnTIeNe4PDtQe5AqD5IDyVirHyfg9n4HYF7SR1gto"

HTTP/1.1 403 Forbidden
{"message":"Accès interdit"}

8. curl -i -X POST http://localhost:3000/api/dons \
-H "Content-Type: application/json" \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiYWhtZWRAc2FuZ2Nvbm5lY3QudG4iLCJyb2xlIjoiQUdFTlRfQ0VOVFJFIiwiaWF0IjoxNzk1NDQ0MTk3LCJleHAiOjE3OTU0NDc3OTd9.RvEFA3I2dRwj1juP6FJcFHzbVyR-Tdx5MTBUYP1BjgQ" \
-d '{           
  "volume": 450,
  "donneurId": 2,
  "centreId": 1
}'

HTTP/1.1 201 Created

{"id":4,"dateDon":"2026-11-23T14:30:34.514Z","volume":450,"donneurId":2,"centreId":1,"donneur":{"id":2,"nom":"Trabelsi","prenom":"Sami","groupe_sanguin":"O+","telephone":null},"centre":{"id":1,"nom":"Centre de Monastir","ville":"Monastir","adresse":"Avenue de l Indépendance","telephone":"73444555"}}