import prisma from "../database/prisma.js";

export function getAll() {
    return prisma.centre.findMany();
}

export function getById(id) {
    return prisma.centre.findUnique({
        where: { id }
    });
}

export function getByVille(ville) {
    return prisma.centre.findMany({
        where: { ville: ville }
    });
}

export function create(data) {
    return prisma.centre.create({
        data: {
            nom: data.nom,
            ville: data.ville,
            adresse: data.adresse,
            telephone: data.telephone
        }
    });
}

export function update(id, data) {
    return prisma.centre.update({
        where: { id },
        data: {
            nom: data.nom,
            ville: data.ville,
            adresse: data.adresse,
            telephone: data.telephone
        }
    });
}

export function patch(id, data) {
    return prisma.centre.update({
        where: { id },
        data: data
    });
}

export function remove(id) {
    return prisma.centre.delete({
        where: { id }
    });
}