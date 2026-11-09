import * as donneurRepository from "../repositories/donneur.repository.js";

export function getAll(groupeSanguin, sort) {
    return donneurRepository.findAll(groupeSanguin, sort);
}

export function getById(id) {
    return donneurRepository.findById(id);
}

export function create(data) {
    return donneurRepository.create(data);
}

export function update(id, data) {
    return donneurRepository.update(id, data);
}

export function remove(id) {
    return donneurRepository.remove(id);
}