import { z } from "zod";

export const donneurSchema = z.object({
    nom: z.string().min(2),
    prenom: z.string().min(1),
    groupeSanguin: z.enum([
        "A+", "A-", "B+", "B-",
        "AB+", "AB-", "O+", "O-"
    ]),
     //email: z.string().email(),
     telephone: z.string().regex(
         /^[0-9]{8}$/,
         "Le numéro doit contenir exactement 8 chiffres"
     )
});

export const idSchema = z.object({
    id: z.coerce.number().int().positive()
});

export const donneurQuerySchema = z.object({
    groupeSanguin: z.enum([
        "A+", "A-", "B+", "B-",
        "AB+", "AB-", "O+", "O-"
    ]).optional()
});

export const updateDonneurSchema = donneurSchema.partial();