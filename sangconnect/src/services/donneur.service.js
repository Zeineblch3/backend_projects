const donneurs = [
    {
        id: 1,
        nom: "Ben Ali",
        prenom: "Ahmed",
        groupeSanguin: "A+"
    },
    {
        id: 2,
        nom: "Trabelsi",
        prenom: "Sami",
        groupeSanguin: "O+"
    }
];

export function getAll() {
    return donneurs;
}

export function getById(id) {
    return donneurs.find(
        donneur => donneur.id === id
    );
}

export function create(data) {
    const donneur = {
        id: donneurs.length > 0
            ? Math.max(...donneurs.map(d => d.id)) + 1
            : 1,
        nom: data.nom,
        prenom: data.prenom,
        groupeSanguin: data.groupeSanguin
    };

    donneurs.push(donneur);

    return donneur;
}

export function update(id, data) {
    const donneur = getById(id);

    if (!donneur) {
        return null;
    }

    donneur.nom = data.nom;
    donneur.prenom = data.prenom;
    donneur.groupeSanguin = data.groupeSanguin;

    return donneur;
}

export function patch(id, data) {
    const donneur = getById(id);

    if (!donneur) {
        return null;
    }

    if (data.nom !== undefined) {
        donneur.nom = data.nom;
    }

    if (data.prenom !== undefined) {
        donneur.prenom = data.prenom;
    }

    if (data.groupeSanguin !== undefined) {
        donneur.groupeSanguin = data.groupeSanguin;
    }

    return donneur;
}

export function remove(id) {
    const index = donneurs.findIndex(
        donneur => donneur.id === id
    );

    if (index === -1) {
        return false;
    }

    donneurs.splice(index, 1);

    return true;
}

export function getByGroupeSanguin(groupeSanguin) {
    return donneurs.filter(
        donneur => donneur.groupeSanguin === groupeSanguin
    );
}