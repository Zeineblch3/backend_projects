import { listCentres, showCentre } from "../controllers/centre.controller.js";

export async function handleCentreRoutes(req, res){
    if (req.url === "/api/centres" && req.method === "GET"){
        await listCentres(req, res);
        return true;
    }

    const match = req.url.match(/^\/api\/centres\/(\d+)$/);

    if (match && req.method === "GET"){
        const id = Number(match[1]);
        await showCentre(req, res, id);
        return true;
    }
    return false;
}