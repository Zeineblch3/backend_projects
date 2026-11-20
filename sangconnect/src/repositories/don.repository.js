import prisma from "../database/prisma.js";

export function findAll({ where, skip, take }) {
    return prisma.don.findMany({
        where,
        skip,
        take,

        select: {
            id: true,
            dateDon: true,
            volume: true,

            donneur: {
                select: {
                    nom: true,
                    prenom: true,
                    groupe_sanguin: true
                }
            },

            centre: {
                select: {
                    nom: true,
                    ville: true
                }
            }
        },

        orderBy: {
            dateDon: "desc"
        }
    });
}

export function count(where) {
    return prisma.don.count({
        where
    });
}

export function findById(id) {
    return prisma.don.findUnique({
        where: {
            id
        },
        include: {
            donneur: true,
            centre: true
        }
    });
}

export function create(data) {
    return prisma.don.create({
        data,
        include: {
            donneur: true,
            centre: true
        }
    });
}

export function update(id, data) {
    return prisma.don.update({
        where: { id },
        data,
        include: {
            donneur: true,
            centre: true
        }
    });
}

export function remove(id) {
    return prisma.don.delete({
        where: { id }
    });
}

export function findByDonneur(donneurId) {
    return prisma.don.findMany({
        where: { donneurId },
        include: {
            centre: true
        },
        orderBy: {
            dateDon: "desc"
        }
    });
}