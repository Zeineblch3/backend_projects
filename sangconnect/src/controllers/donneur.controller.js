/*import { getAllDonneurs, getDonneurById, searchDonneurByVille } from "../services/donneur.service.js";
import { sendJson } from "../utils/http.js";

export async function listDonneurs(req, res) {
    try {
        const url = new URL(req.url, `http://${req.headers.host}`);
        const ville = url.searchParams.get("ville");

        let donneurs;

        if (ville) {
            donneurs = await searchDonneurByVille(ville);
        } else {
            donneurs = await getAllDonneurs();
        }

        sendJson(res, 200, {
            data: donneurs
        });
    } catch (error) {
        sendJson(res, 500, {
            error: "Erreur interne du serveur"
        });
    }
}

export async function showDonneur(req, res, id) {
    try {
        const donneur = await getDonneurById(id);

        sendJson(res, 200, {
            data: donneur
        });
    } catch (error) {
        sendJson(res, 404, {
            error: error.message
        });
    }
}

*/



import * as donneurService from "../services/donneur.service.js";

export function getAll(req,res){
    const donneurs = donneurService.getAll();
    res.json(donneurs);
}

export function getById(req,res){
    const id = Number(req.params.id);
    const donneur = donneurService.getById(id);
    if (!donneur){
        return res.status(404).json({
            message: "Donneur introuvable"
        });
    }
    res.json(donneur);
}