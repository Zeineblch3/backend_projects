/*import { listDonneurs, showDonneur } from "../controllers/donneur.controller.js";

export async function handleDonneurRoutes(req, res){
    
    const url = new URL(req.url, `http://${req.headers.host}`);
    if (url.pathname === "/api/donneurs" && req.method === "GET"){
        await listDonneurs(req, res);
        return true;
    }

    const match = req.url.match(/^\/api\/donneurs\/(\d+)$/);

    if (match && req.method === "GET"){
        const id = Number(match[1]);
        await showDonneur(req, res, id);
        return true;
    }
    return false;
}

*/


import express from "express";
import { getAll, getById} from "../controllers/donneur.controller.js";

const router = express.Router();
router.get("/", getAll);
router.get("/:id",getById);
export default router;