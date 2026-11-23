import express from "express";

import {
    register,
    login,
    me
} from "../controllers/auth.controller.js";
import { authenticate } from "../middlewares/auth.js";
import {
    registerSchema,
    loginSchema
} from "../validators/auth.validator.js";

import { validate } from "../middlewares/validate.js";

const router = express.Router();

router.post(
    "/register",
    validate(registerSchema, "body"),
    register
);

/**
 * @openapi
 * /api/auth/login:
 *   post:
 *     summary: Authentifier un utilisateur
 *     description: Vérifie les identifiants et retourne un token JWT.
 *     tags:
 *       - Authentication
 *     security: []
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *
 *     responses:
 *       200:
 *         description: Authentification réussie.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *
 *       400:
 *         description: Données de connexion invalides.
 *
 *       401:
 *         description: Email ou mot de passe incorrect.
 */

router.post(
    "/login",
    validate(loginSchema, "body"),
    login
);
router.get("/me", authenticate, me);
export default router;