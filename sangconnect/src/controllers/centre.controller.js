import * as centreService
    from "../services/centre.service.js";

export async function getAll(req, res, next) {
    try {
        const ville = req.query.ville;

        let centres;

        if (ville) {
            centres = await centreService.getByVille(ville);
        } else {
            centres = await centreService.getAll();
        }

        res.json(centres);

    } catch (error) {
        next(error);
    }
}

export async function getById(req, res, next) {
    try {
        const id = Number(req.params.id);

        const centre = await centreService.getById(id);

        if (!centre) {
            return res.status(404).json({
                message: "Centre introuvable"
            });
        }

        res.json(centre);

    } catch (error) {
        next(error);
    }
}

export async function create(req, res, next) {
    try {
        const centre = await centreService.create(req.body);

        res.status(201).json(centre);

    } catch (error) {
        next(error);
    }
}

export async function update(req, res, next) {
    try {
        const id = Number(req.params.id);

        const centre = await centreService.update(id, req.body);

        if (!centre) {
            return res.status(404).json({
                message: "Centre introuvable"
            });
        }

        res.json(centre);

    } catch (error) {
        next(error);
    }
}

export async function patch(req, res, next) {
    try {
        const id = Number(req.params.id);

        const centre = await centreService.patch(id, req.body);

        if (!centre) {
            return res.status(404).json({
                message: "Centre introuvable"
            });
        }

        res.json(centre);

    } catch (error) {
        next(error);
    }
}

export async function remove(req, res, next) {
    try {
        const id = Number(req.params.id);

        const deleted = await centreService.remove(id);

        if (!deleted) {
            return res.status(404).json({
                message: "Centre introuvable"
            });
        }

        res.status(204).send();

    } catch (error) {
        next(error);
    }
}