import express from "express";

import {
    getAll,
    getById,
    create,
    replace,
    patch,
    remove
} from "../controllers/don.controller.js";

const router = express.Router();

router.get("/", getAll);

router.get("/:id", getById);

router.post("/", create);

router.put("/:id", replace);

router.patch("/:id", patch);

router.delete("/:id", remove);

export default router;