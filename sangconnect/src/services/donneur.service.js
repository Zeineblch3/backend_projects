/*import { findAll, findById, searchByVille} from "../repositories/donneur.repository.js";

export async function getAllDonneurs(){
    return await findAll();
}
export async function getDonneurById(id){
    const donneur = await findById(id);
    if (!donneur){
        throw new Error("Donneur introuvable");
    }
    return donneur;
}

export async function searchDonneurByVille(ville){
    if(!ville || ville.trim() === ""){
        throw new Error("la ville est obligtoire");
    }
    return await searchByVille(ville);
} */




const donneurs = [
    {
        id: 1,
        nom: "ben ali",
        prenom: "ahmed",
        groupeSanguin: "O+",
        ville: "Tunis"
    },{
        id: 2,
        nom: "kacem",
        prenom: "omar",
        groupeSanguin: "B+",
        ville: "Tunis"
    },{
        id: 3,
        nom: "lallouch",
        prenom: "zeineb",
        groupeSanguin: "A+",
        ville: "Sousse"
    }
]

export function getAll(){
    return donneurs;
}

export function getById(id){
    return donneurs.find(
        donneur => donneur.id === id
    );
}