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

router.get("/", authenticate, getAll);

router.get("/:id", getById);

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