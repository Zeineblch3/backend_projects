# Travail Demandé : 

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