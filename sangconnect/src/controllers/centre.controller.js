import * as centreService from "../services/centre.service.js";

export function getAll(req, res) {
    const ville = req.query.ville;

    if (ville) {
        return res.json(
            centreService.getByVille(ville)
        );
    }

    res.json(centreService.getAll());
}

export function getById(req, res) {
    const id = Number(req.params.id);
    const centre = centreService.getById(id);

    if (!centre) {
        return res.status(404).json({
            message: "Centre introuvable"
        });
    }

    res.json(centre);
}

export function create(req, res) {
    const { nom, ville, adresse, telephone } = req.body;

    if (!nom || !ville || !adresse || !telephone) {
        return res.status(400).json({
            message: "Données invalides"
        });
    }

    const centre = centreService.create(req.body);

    res.status(201).json(centre);
}

export function update(req, res) {
    const id = Number(req.params.id);
    const { nom, ville, adresse, telephone } = req.body;

    if (!nom || !ville || !adresse || !telephone) {
        return res.status(400).json({
            message: "Données invalides"
        });
    }

    const centre = centreService.update(id, req.body);

    if (!centre) {
        return res.status(404).json({
            message: "Centre introuvable"
        });
    }

    res.json(centre);
}

export function patch(req, res) {
    const id = Number(req.params.id);
    const centre = centreService.patch(id, req.body);

    if (!centre) {
        return res.status(404).json({
            message: "Centre introuvable"
        });
    }

    res.json(centre);
}

export function remove(req, res) {
    const id = Number(req.params.id);
    const deleted = centreService.remove(id);

    if (!deleted) {
        return res.status(404).json({
            message: "Centre introuvable"
        });
    }

    res.status(204).send();
}