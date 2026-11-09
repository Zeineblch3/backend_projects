import express from "express";

import {
    getAll,
    getById,
    create,
    update,
    patch,
    remove
} from "../controllers/centre.controller.js";

import { validate } from "../middlewares/validate.js";

import {
    centreSchema,
    idSchema,
    centreQuerySchema,
    updateCentreSchema
} from "../validators/centre.validator.js";

const router = express.Router();

router.get(
    "/",
    validate(centreQuerySchema, "query"),
    getAll
);

router.get(
    "/:id",
    validate(idSchema, "params"),
    getById
);

router.post(
    "/",
    validate(centreSchema, "body"),
    create
);

router.put(
    "/:id",
    validate(idSchema, "params"),
    validate(centreSchema, "body"),
    update
);

router.patch(
    "/:id",
    validate(idSchema, "params"),
    validate(updateCentreSchema, "body"),
    patch
);

router.delete(
    "/:id",
    validate(idSchema, "params"),
    remove
);

export default router;