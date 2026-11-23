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

router.post(
    "/login",
    validate(loginSchema, "body"),
    login
);
router.get("/me", authenticate, me);
export default router;