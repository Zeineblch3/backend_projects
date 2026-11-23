import express from "express";

import donneurRoutes from "./routes/donneur.routes.js";
import centreRoutes from "./routes/centre.routes.js";
import donRoutes from "./routes/don.routes.js";
import authRoutes from "./routes/auth.routes.js";
import "dotenv/config";

import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

const PORT = 3000;

app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Bienvenue dans l'API SangConnect"
    });
});

app.use("/api/donneurs", donneurRoutes);
app.use("/api/centres", centreRoutes);
app.use("/api/dons", donRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});