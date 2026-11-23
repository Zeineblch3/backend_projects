import * as userRepository from "../repositories/user.repository.js";
import {
    generateToken
} from "../utils/jwt.js";

import {
    hashPassword,
    verifyPassword
} from "../utils/password.js";

export async function register(data) {

    const existingUser = await userRepository.findByEmail(data.email);

    if (existingUser) {
        const error = new Error("Cette adresse email est déjà utilisée");
        error.statusCode = 409;
        throw error;
    }

    const hashedPassword = await hashPassword(data.password);

    const user = await userRepository.create({
        nom: data.nom,
        email: data.email,
        password: hashedPassword,
        role: "AGENT_CENTRE"
    });

    return {
        id: user.id,
        nom: user.nom,
        email: user.email,
        role: user.role
    };
}

export async function login(email, password) {

    const user = await userRepository.findByEmail(email);

    if (!user) {
        const error = new Error("Email ou mot de passe incorrect");
        error.statusCode = 401;
        throw error;
    }

    const valid = await verifyPassword(user.password, password);

    if (!valid) {
        const error = new Error("Email ou mot de passe incorrect");
        error.statusCode = 401;
        throw error;
    }

    const token = generateToken(user);

    return {
        token,
        user: {
            id: user.id,
            nom: user.nom,
            email: user.email,
            role: user.role
        }
    };
}

export async function getMe(id) {
    const user = await userRepository.findById(Number(id));

    if (!user) {
        const error = new Error("Utilisateur introuvable");
        error.statusCode = 404;
        throw error;
    }

    return {
        id: user.id,
        nom: user.nom,
        email: user.email,
        role: user.role
    };
}