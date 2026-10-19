import { z } from "zod";

//decrire la structure de l'objet , nom : chaine
const schema = z.object({
    nom: z.string(),
    prenom: z.string()
});
const donneur = {
    nom: "Ben Ali",
    prenom: "Ahmed"
};
//verification vec safePrase
const resultat = schema.safeParse(donneur);
console.log(resultat);