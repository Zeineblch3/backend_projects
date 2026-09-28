const centres = [
    {
        id: 1,
        nom: "Centre de transfusion de Tunis",
        ville: "Tunis"
    },
    {
        id: 12,
        nom: "Centre régional de Sousse",
        ville: "Sousse"
    },
    {
        id: 3,
        nom: "Centre régional de Sfax",
        ville: "Sfax"
    },
];

export async function findAll(){
    return centres;
}
export async function findByTd(id){
    return centres.find(centre => centre.id === id);
}