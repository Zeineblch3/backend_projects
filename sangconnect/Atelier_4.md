# Atelier 4 - Validation des données et gestion des erreurs

### Activité 1 :

1. La dépendance Zod aparait dans le fichier packahe.json dans la section dependencies.
2. node src/test-zod.js
{ success: true, data: { nom: 'Ben Ali', prenom: 'Ahmed' } }
3. z.object({nom: z.string(),..}) : décrire la structure de l'objet (nom : chaine).
    schema.safeParse(donneur) : verification des données avec safePrase si valide success.

4. node src/validators/donneur.validator.js : avec données valides
=> true
node src/validators/donneur.validator.js : avec données non valides
=> false

5. console.log(resultat.error): nous permet de visualiiser les erreurs de validations
"message": "Invalid option: expected one of \"A+\"|\"A-\"|\"B+\"|\"B-\"|\"AB+\"|\"AB-\"|\"O+\"|\"O-\""
"message": "Too small: expected string to have >=2 characters"



