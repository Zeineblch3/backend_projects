import { z } from "zod";

// Validation des données du centre
export const centreSchema = z.object({
    nom: z.string().min(2),
    ville: z.string().min(2),
    adresse: z.string().min(3),
    telephone: z.string().min(8)
});

// Validation de l'identifiant
export const idSchema = z.object({
    id: z.coerce.number().int().positive()
});

// Validation du paramètre de recherche
export const centreQuerySchema = z.object({
    ville: z.string().min(2).optional()
});

// Validation des modifications partielles
export const updateCentreSchema = centreSchema.partial();