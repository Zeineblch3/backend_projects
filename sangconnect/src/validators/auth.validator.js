import { z } from "zod";

export const registerSchema = z.object({
    nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    email: z.string().email("Email invalide"),
    password: z.string()
        .min(8, "Minimum 8 caractères")
        .regex(/[A-Za-z]/, "Le mot de passe doit contenir une lettre")
        .regex(/[0-9]/, "Le mot de passe doit contenir un chiffre"),
    role: z.enum([
        "ADMIN",
        "AGENT_CENTRE",
        "RESPONSABLE_STOCK"
    ]).optional()
});

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1)
});