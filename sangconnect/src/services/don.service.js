import * as donRepository from "../repositories/don.repository.js";

export async function getAll(filters, page, limit, sort, order) {

    if (!Number.isInteger(page) || page < 1) {
        throw new Error("Page invalide");
    }

    if (!Number.isInteger(limit) || limit < 1 || limit > 100) {
        throw new Error("Limit invalide");
    }

    const where = {};

    if (filters.centreId) {
        where.centreId = filters.centreId;
    }

    if (filters.donneurId) {
        where.donneurId = filters.donneurId;
    }

    if (filters.ville) {
        where.centre = {
            is: {
                ville: filters.ville
            }
        };
    }

    if (filters.groupeSanguin) {
        where.donneur = {
            is: {
                groupe_sanguin: filters.groupeSanguin
            }
        };
    }

    const sortField = ["dateDon", "volume"].includes(sort)
        ? sort
        : "dateDon";

    const sortOrder = ["asc", "desc"].includes(order)
        ? order
        : "desc";

    const skip = (page - 1) * limit;

    const dons = await donRepository.findAll({
        where,
        skip,
        take: limit,
        orderBy: {
            [sortField]: sortOrder
        }
    });

    const total = await donRepository.count(where);

    return {
        data: dons,
        pagination: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit)
        }
    };
}

export async function getById(id) {

    const don = await donRepository.findById(id);

    if (!don) {
        const error = new Error("Don introuvable");
        error.statusCode = 404;
        throw error;
    }

    return don;
}

export async function create(data) {

    if (!data.volume || !data.donneurId || !data.centreId) {
        const error = new Error("Données obligatoires manquantes");
        error.statusCode = 400;
        throw error;
    }

    return donRepository.create(data);
}

export async function replace(id, data) {

    await getById(id);

    if (
        data.volume === undefined ||
        data.donneurId === undefined ||
        data.centreId === undefined
    ) {
        const error = new Error("Tous les champs sont obligatoires pour PUT");
        error.statusCode = 400;
        throw error;
    }

    return donRepository.update(id, data);
}

export async function patch(id, data) {

    await getById(id);

    if (Object.keys(data).length === 0) {
        const error = new Error("Aucune donnée à modifier");
        error.statusCode = 400;
        throw error;
    }

    return donRepository.update(id, data);
}

export async function remove(id) {

    await getById(id);

    return donRepository.remove(id);
}

export async function getByDonneur(donneurId) {
    return donRepository.findByDonneur(donneurId);
}