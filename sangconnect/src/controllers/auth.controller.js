import * as authService from "../services/auth.service.js";

export async function register(req, res, next) {
    try {
        const user = await authService.register(req.body);

        res.status(201).json({
            id: user.id,
            nom: user.nom,
            email: user.email,
            role: user.role
        });

    } catch (error) {
        next(error);
    }
}

export async function login(req, res, next) {
    try {
        const result = await authService.login(
            req.body.email,
            req.body.password
        );

        res.json(result);

    } catch (error) {
        next(error);
    }
}

export async function me(req, res, next) {
    try {
        const user = await authService.getMe(req.user.sub);

        res.json(user);

    } catch (error) {
        next(error);
    }
}