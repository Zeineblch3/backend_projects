import express from "express";

import {getAll,getById,create,update,patch,remove,getByGroupeSanguin} from "../controllers/donneur.controller.js";

import { validate } from "../middlewares/validate.js";

import {
    donneurSchema,
    idSchema,
    donneurQuerySchema,
    updateDonneurSchema
} from "../validators/donneur.validator.js";

const router = express.Router();

router.get(
    "/",
    validate(donneurQuerySchema, "query"),
    getAll);

router.get(
    "/:id",
    validate(idSchema, "params"),
    getById);

router.post(
    "/",
    validate(donneurSchema, "body"),
    create
);

router.put("/:id",
    validate(idSchema, "params"),
    validate(donneurSchema, "body"),
    update);

router.patch("/:id",
    validate(idSchema, "params"),
    validate(updateDonneurSchema, "body"),
    update);

router.delete("/:id", remove);

router.get("/groupe", getByGroupeSanguin);

export default router