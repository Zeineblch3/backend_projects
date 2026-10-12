/*import { sendJson } from "./utils/http.js";

import http from "node:http";

const port = 3000;
const server = http.createServer((req,res) => {

    console.log("Méthode :", req.method);
    console.log("URL :", req.url);

    if (req.url === "/" && req.method === "GET"){
        sendJson(res, 200, {message: "Bienvenue dans SangConnect", application: "Gestion des dons de sang"});
        return;
    }
    if (req.url === "/api/health" && req.method === "GET"){
        sendJson(res, 200, {status: "ok", application: "SangConnect", timestamps: new Date().toISOString(), nodeVersion: process.version});
        return;
    }
    if(req.url === "/api/info" && req.method === "GET"){
        sendJson(res, 200, {application: "SangConnect", version: "1.0.0", environment: "development", nodeVersion: process.version});
        return;
    }
    if(req.url === "/api/diagnostic"){
        if(req.method !== "GET"){
            sendJson(res, 405, {error: "Méthode non autorisée", method: req.method, allowedMethods: ["GET"]});
            return;
        }
        sendJson(res, 200, {method: req.method, url: req.url, headers: req.headers});
        return;
    }
    sendJson(res, 404, {
        error: "Route non trouvée",
        path: req.url,
        method: req.method,
        timestamp: new Date().toISOString()
    });

});
server.listen(port, () => { console.log(`Serveur démarré sur http://localhost:${port}`)});
*/

import express from "express";

const app = express();
const PORT = 3000;

const donneurs = [
    {
        id: 1,
        nom: "ben ali",
        prenom: "ahmed",
        groupeSanguin: "O+",
        ville: "Tunis"
    },
    {
        id: 2,
        nom: "kacem",
        prenom: "omar",
        groupeSanguin: "B+",
        ville: "Tunis"
    },{
        id: 3,
        nom: "lallouch",
        prenom: "zeineb",
        groupeSanguin: "A+",
        ville: "Sousse"
    }
]

app.get("/", (req, res) => {
    res.send("Bienvenue dans SangConnect");
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

app.get("/api/health", (req, res)=> {
    res.json({
        status: "OK",
        service: "SangConnect"
    });
});


app.get("/api/donneurs/:id", (req, res) => {
    const id = Number(req.params.id);
    const donneur = donneurs.find(
        donneur => donneur.id === id
    );
    if (!donneur){
        return res.status(404).json({
            message: "Donneur introuvable"
        });
    }
    res.json(donneur);
});

app.get("/api/donneurs", (req, res) => {
    const groupe = req.query.groupeSanguin;
    if (!groupe){
        return res.json(donneurs);
    }
    const resultat = donneurs.filter(
        donneur => donneur.groupeSanguin === groupe
    );
    res.json(resultat);
})


