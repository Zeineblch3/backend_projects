import * as donService from "../services/don.service.js";

export async function getAll(req, res, next) {
    try {
        const page = Number(req.query.page || 1);
        const limit = Number(req.query.limit || 10);

        const filters = {
            centreId: req.query.centreId
                ? Number(req.query.centreId)
                : undefined,

            donneurId: req.query.donneurId
                ? Number(req.query.donneurId)
                : undefined,

            ville: req.query.ville,
            groupeSanguin: req.query.groupeSanguin
        };

        const sort = req.query.sort || "dateDon";
        const order = req.query.order || "desc";

        const result = await donService.getAll(
            filters,
            page,
            limit,
            sort,
            order
        );

        res.json(result);

    } catch (error) {
        next(error);
    }
}

export async function getById(req, res, next) {
    try {
        const id = Number(req.params.id);

        const don = await donService.getById(id);

        res.json(don);

    } catch (error) {
        next(error);
    }
}

export async function create(req, res, next) {
    try {
        const data = {
            ...req.body,
            volume: Number(req.body.volume),
            donneurId: Number(req.body.donneurId),
            centreId: Number(req.body.centreId)
        };

        const don = await donService.create(data);

        res.status(201).json(don);

    } catch (error) {
        next(error);
    }
}

export async function replace(req, res, next) {
    try {
        const id = Number(req.params.id);

        const data = {
            ...req.body,
            volume: Number(req.body.volume),
            donneurId: Number(req.body.donneurId),
            centreId: Number(req.body.centreId)
        };

        const don = await donService.replace(id, data);

        res.json(don);

    } catch (error) {
        next(error);
    }
}

export async function patch(req, res, next) {
    try {
        const id = Number(req.params.id);

        const data = { ...req.body };

        if (data.volume !== undefined) {
            data.volume = Number(data.volume);
        }

        if (data.donneurId !== undefined) {
            data.donneurId = Number(data.donneurId);
        }

        if (data.centreId !== undefined) {
            data.centreId = Number(data.centreId);
        }

        const don = await donService.patch(id, data);

        res.json(don);

    } catch (error) {
        next(error);
    }
}

export async function remove(req, res, next) {
    try {
        const id = Number(req.params.id);

        await donService.remove(id);

        res.status(204).send();

    } catch (error) {
        next(error);
    }
}