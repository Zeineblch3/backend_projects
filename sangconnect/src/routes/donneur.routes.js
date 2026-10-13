import express from "express";

import {getAll,getById,create,update,patch,remove,getByGroupeSanguin} from "../controllers/donneur.controller.js";

const router = express.Router();

router.get("/", getAll);

router.get("/:id", getById);

router.post("/", create);

router.put("/:id", update);

router.patch("/:id", patch);

router.delete("/:id", remove);

router.get("/groupe", getByGroupeSanguin);

export default router