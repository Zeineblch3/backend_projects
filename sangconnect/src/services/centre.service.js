import { findAll, findById, searchByCity } from "../repositories/centre.repository.js";

export async function getAllCentres(){
    return await findAll();
}
export async function getCentreById(id){
    const centre = await findById(id);
    if (!centre){
        throw new Error("Centre introuvable");
    }
    return centre;
}

export async function searchCentreByCity(city){
    if(!city || city.trim() === ""){
        throw new Error("la ville est obligtoire");
    }
    return await searchByCity(city);
}