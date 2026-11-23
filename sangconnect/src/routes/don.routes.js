import express from "express";
import { authenticate } from "../middlewares/auth.js";
import { authorize } from "../middlewares/authorize.js";
import {
    getAll,
    getById,
    create,
    replace,
    patch,
    remove
} from "../controllers/don.controller.js";

const router = express.Router();


/**
 * @openapi
 * /api/donneurs:
 *   get:
 *     summary: Lister et filtrer les donneurs
 *     description: Retourne la liste des donneurs avec possibilité de filtrage et de tri.
 *     tags:
 *       - Donneurs
 *
 *     parameters:
 *       - name: groupeSanguin
 *         in: query
 *         required: false
 *         description: Filtrer par groupe sanguin.
 *         schema:
 *           type: string
 *         example: A+
 *
 *       - name: sort
 *         in: query
 *         required: false
 *         description: Trier les donneurs par nom ou prénom.
 *         schema:
 *           type: string
 *           enum: [nom, prenom]
 *
 *     responses:
 *       200:
 *         description: Liste des donneurs récupérée avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Donneur'
 *
 *       400:
 *         description: Paramètres invalides.
 */

router.get("/", authenticate, getAll);


/**
 * @openapi
 * /api/donneurs/{id}:
 *   get:
 *     summary: Consulter un donneur
 *     description: Retourne les informations d'un donneur selon son identifiant.
 *     tags:
 *       - Donneurs
 *
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identifiant du donneur.
 *         schema:
 *           type: integer
 *         example: 1
 *
 *     responses:
 *       200:
 *         description: Donneur trouvé.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Donneur'
 *
 *       404:
 *         description: Donneur introuvable.
 */

router.get("/:id", getById);

/**
 * @openapi
 * /api/donneurs:
 *   post:
 *     summary: Créer un donneur
 *     description: Enregistre un nouveau donneur dans SangConnect.
 *     tags:
 *       - Donneurs
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateDonneur'
 *
 *     responses:
 *       201:
 *         description: Donneur créé avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Donneur'
 *
 *       400:
 *         description: Données invalides.
 */
router.post(
    "/",
    authenticate,
    authorize("ADMIN", "AGENT_CENTRE"),
    create
);

router.put(
    "/:id",
    authenticate,
    authorize("ADMIN", "AGENT_CENTRE"),
    replace
);

router.patch(
    "/:id",
    authenticate,
    authorize("ADMIN", "AGENT_CENTRE"),
    patch
);

router.delete(
    "/:id",
    authenticate,
    authorize("ADMIN"),
    remove
);



export default router;