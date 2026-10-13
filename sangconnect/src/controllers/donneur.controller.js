import * as donneurService from "../services/donneur.service.js";

export function getAll(req, res) {
    const groupeSanguin = req.query.groupeSanguin;

    if (groupeSanguin) {
        return res.json(
            donneurService.getByGroupeSanguin(groupeSanguin)
        );
    }

    res.json(donneurService.getAll());
}

export function getById(req, res) {
    const id = Number(req.params.id);
    const donneur = donneurService.getById(id);

    if (!donneur) {
        return res.status(404).json({
            message: "Donneur introuvable"
        });
    }

    res.json(donneur);
}

export function create(req, res) {
    const { nom, prenom, groupeSanguin } = req.body;

    if (!nom || !prenom || !groupeSanguin) {
        return res.status(400).json({
            message: "Données invalides"
        });
    }

    const donneur = donneurService.create(req.body);

    res.status(201).json(donneur);
}

export function update(req, res) {
    const id = Number(req.params.id);
    const donneur = donneurService.update(id, req.body);

    if (!donneur) {
        return res.status(404).json({
            message: "Donneur introuvable"
        });
    }

    res.json(donneur);
}

export function patch(req, res) {
    const id = Number(req.params.id);
    const donneur = donneurService.patch(id, req.body);

    if (!donneur) {
        return res.status(404).json({
            message: "Donneur introuvable"
        });
    }

    res.json(donneur);
}

export function remove(req, res) {
    const id = Number(req.params.id);
    const deleted = donneurService.remove(id);

    if (!deleted) {
        return res.status(404).json({
            message: "Donneur introuvable"
        });
    }

    res.status(204).send();
}

export function getByGroupeSanguin(req, res) {
    const groupeSanguin = req.query.groupeSanguin;

    const donneurs = donneurService.getByGroupeSanguin(groupeSanguin);

    res.json(donneurs);
}