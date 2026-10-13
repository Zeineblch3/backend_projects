const centres = [
    {
        id: 1,
        nom: "Centre de Tunis",
        ville: "Tunis",
        adresse: "Avenue Habib Bourguiba",
        telephone: "71111222"
    },
    {
        id: 2,
        nom: "Centre de Sousse",
        ville: "Sousse",
        adresse: "Boulevard de la République",
        telephone: "73333444"
    },
    {
        id: 3,
        nom: "Centre de Sfax",
        ville: "Sfax",
        adresse: "Route de Tunis",
        telephone: "74444555"
    }
];

export function getAll() {
    return centres;
}

export function getById(id) {
    return centres.find(
        centre => centre.id === id
    );
}

export function getByVille(ville) {
    return centres.filter(
        centre => centre.ville.toLowerCase() === ville.toLowerCase()
    );
}

export function create(data) {
    const centre = {
        id: centres.length > 0
            ? Math.max(...centres.map(c => c.id)) + 1
            : 1,
        nom: data.nom,
        ville: data.ville,
        adresse: data.adresse,
        telephone: data.telephone
    };

    centres.push(centre);

    return centre;
}

export function update(id, data) {
    const centre = getById(id);

    if (!centre) {
        return null;
    }

    centre.nom = data.nom;
    centre.ville = data.ville;
    centre.adresse = data.adresse;
    centre.telephone = data.telephone;

    return centre;
}

export function patch(id, data) {
    const centre = getById(id);

    if (!centre) {
        return null;
    }

    if (data.nom !== undefined) {
        centre.nom = data.nom;
    }

    if (data.ville !== undefined) {
        centre.ville = data.ville;
    }

    if (data.adresse !== undefined) {
        centre.adresse = data.adresse;
    }

    if (data.telephone !== undefined) {
        centre.telephone = data.telephone;
    }

    return centre;
}

export function remove(id) {
    const index = centres.findIndex(
        centre => centre.id === id
    );

    if (index === -1) {
        return false;
    }

    centres.splice(index, 1);

    return true;
}