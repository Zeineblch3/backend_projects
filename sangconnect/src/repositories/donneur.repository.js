const donneurs = [
    {
        id: 1,
        nom: "ben ali",
        prenom: "ahmed",
        groupeSanguin: "O+",
        ville: "Tunis"
    },
    {
        id: 2,
        nom: "kacem",
        prenom: "omar",
        groupeSanguin: "O-",
        ville: "Tunis"
    },
    {
        id: 3,
        nom: "lallouch",
        prenom: "zeineb",
        groupeSanguin: "A+",
        ville: "Sousse"
    },
    {
        id: 4,
        nom: "ameri",
        prenom: "meriem",
        groupeSanguin: "B+",
        ville: "kairouan"
    },
    {
        id: 5,
        nom: "rawen",
        prenom: "arfaoui",
        groupeSanguin: "A+",
        ville: "Tunis"
    },
    
];

export async function findAll(){
    return donneurs;
}
export async function findById(id){
    return donneurs.find(donneur => donneur.id === id);
}

export async function searchByVille(ville){
    return donneurs.filter(
        donneur => donneur.ville.toLowerCase() === ville.toLowerCase()
    );
}