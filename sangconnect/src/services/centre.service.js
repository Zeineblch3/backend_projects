import { findAll, findById } from "../repositories/centre.repository.js";

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