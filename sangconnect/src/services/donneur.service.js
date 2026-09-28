import { findAll, findById, searchByVille} from "../repositories/donneur.repository.js";

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
}