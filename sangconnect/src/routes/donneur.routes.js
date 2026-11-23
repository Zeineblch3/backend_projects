import express from "express";

import {
    getAll,
    getById,
    create,
    update,
    remove
} from "../controllers/donneur.controller.js";

import {
    donneurSchema,
    idSchema,
    donneurQuerySchema,
    updateDonneurSchema
} from "../validators/donneur.validator.js";

import { validate }
from "../middlewares/validate.js";

const router = express.Router();

/**
 * @openapi
 * /api/donneurs:
 *   get:
 *     summary: Lister les donneurs
 *     description: Retourne la liste des donneurs avec possibilité de filtrage.
 *     tags:
 *       - Donneurs
 *     parameters:
 *       - in: query
 *         name: groupeSanguin
 *         schema:
 *           type: string
 *         description: Filtrer par groupe sanguin.
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *         description: Trier les donneurs.
 *     responses:
 *       200:
 *         description: Liste des donneurs récupérée avec succès.
 *       400:
 *         description: Paramètres invalides.
 */

router.get(
    "/",
    validate(donneurQuerySchema, "query"),
    getAll
);

router.get(
    "/:id",
    validate(idSchema, "params"),
    getById
);

router.post(
    "/",
    validate(donneurSchema, "body"),
    create
);

router.put(
    "/:id",
    validate(idSchema, "params"),
    validate(donneurSchema, "body"),
    update
);

router.patch(
    "/:id",
    validate(idSchema, "params"),
    validate(updateDonneurSchema, "body"),
    update
);

router.delete(
    "/:id",
    validate(idSchema, "params"),
    remove
);

export default router;