import prisma from "../database/prisma.js"

export function findAll(groupeSanguin, sort) {
    return prisma.donneurs.findMany({
        where: groupeSanguin
            ? { groupe_sanguin: groupeSanguin }
            : {},

        orderBy: ["nom", "prenom"].includes(sort)
            ? { [sort]: "asc" }
            : undefined
    });
}

export function findById(id) {
    return prisma.donneurs.findUnique({
        where: {
            id: id
        }
    });
}

export function create(data) {
    return prisma.donneurs.create({
        data: {
            nom: data.nom,
            prenom: data.prenom,
            groupe_sanguin: data.groupeSanguin,
            telephone: data.telephone
        }
    });
}

export function update(id, data) {
    return prisma.donneurs.update({
        where: {
            id: id
        },
        data: {
            nom: data.nom,
            prenom: data.prenom,
            groupe_sanguin: data.groupeSanguin,
            telephone: data.telephone
        }
    });
}

export function remove(id) {
    return prisma.donneurs.delete({
        where: {
            id: id
        }
    });
}