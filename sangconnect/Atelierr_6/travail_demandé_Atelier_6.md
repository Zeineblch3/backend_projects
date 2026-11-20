# Travail demandé 

1. curl -X POST http://localhost:3000/api/dons -H "Content-Type: application/json" -d '{"volume":450,"donneurId":2,"centreId":1}'

{"id":2,"dateDon":"2026-11-20T21:38:23.155Z","volume":450,"donneurId":2,"centreId":1,"donneur":{"id":2,"nom":"Trabelsi","prenom":"Sami","groupe_sanguin":"O+","telephone":null},"centre":{"id":1,"nom":"Centre de Monastir","ville":"Monastir","adresse":"Avenue de l Indépendance","telephone":"73444555"}}

2. curl "http://localhost:3000/api/dons?ville=Monastir"

{"data":[{"id":2,"dateDon":"2026-11-20T21:38:23.155Z","volume":450,"donneur":{"nom":"Trabelsi","prenom":"Sami","groupe_sanguin":"O+"},"centre":{"nom":"Centre de Monastir","ville":"Monastir"}}],"pagination":{"page":1,"limit":10,"total":1,"totalPages":1}}

3. curl "http://localhost:3000/api/dons?sort=dateDon&order=desc"

{"data":[{"id":3,"dateDon":"2026-11-20T21:42:22.577Z","volume":450,"donneur":{"nom":"Khelifi","prenom":"Yassine","groupe_sanguin":"AB+"},"centre":{"nom":"Centre régional de Sousse","ville":"Sousse"}},
{"id":2,"dateDon":"2026-11-20T21:38:23.155Z","volume":450,"donneur":{"nom":"Trabelsi","prenom":"Sami","groupe_sanguin":"O+"},"centre":{"nom":"Centre de Monastir","ville":"Monastir"}}],"pagination":{"page":1,"limit":10,"total":2,"totalPages":1}}

4. curl "http://localhost:3000/api/dons?donneurId=3"

{"data":[{"id":3,"dateDon":"2026-11-20T21:42:22.577Z","volume":450,"donneur":{"nom":"Khelifi","prenom":"Yassine","groupe_sanguin":"AB+"},"centre":{"nom":"Centre régional de Sousse","ville":"Sousse"}}],"pagination":{"page":1,"limit":10,"total":1,"totalPages":1}}

5. curl -X PATCH http://localhost:3000/api/dons/2 \
-H "Content-Type: application/json" \
-d '{"volume":550}'

{"id":2,"dateDon":"2026-11-20T21:38:23.155Z","volume":550,"donneurId":2,"centreId":1,"donneur":{"id":2,"nom":"Trabelsi","prenom":"Sami","groupe_sanguin":"O+","telephone":null},"centre":{"id":1,"nom":"Centre de Monastir","ville":"Monastir","adresse":"Avenue de l Indépendance","telephone":"73444555"}}