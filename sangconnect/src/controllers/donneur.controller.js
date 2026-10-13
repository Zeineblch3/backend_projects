import * as donneurService from "../services/donneur.service.js";

export function getAll(req, res) {
    const donneurs = donneurService.getAll();

    res.json(donneurs);
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