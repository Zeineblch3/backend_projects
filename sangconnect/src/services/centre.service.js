import * as centreRepository
    from "../repositories/centre.repository.js";

export function getAll() {
    return centreRepository.getAll();
}

export function getById(id) {
    return centreRepository.getById(id);
}

export function getByVille(ville) {
    return centreRepository.getByVille(ville);
}

export function create(data) {
    return centreRepository.create(data);
}

export async function update(id, data) {
    const centre = await centreRepository.getById(id);

    if (!centre) {
        return null;
    }

    return centreRepository.update(id, data);
}

export async function patch(id, data) {
    const centre = await centreRepository.getById(id);

    if (!centre) {
        return null;
    }

    return centreRepository.patch(id, data);
}

export async function remove(id) {
    const centre = await centreRepository.getById(id);

    if (!centre) {
        return false;
    }

    await centreRepository.remove(id);

    return true;
}