export function authorize(...roles) {
    return (req, res, next) => {

        if (!req.user) {
            const error = new Error("Utilisateur non authentifié");
            error.statusCode = 401;
            return next(error);
        }

        if (!roles.includes(req.user.role)) {
            const error = new Error("Accès interdit");
            error.statusCode = 403;
            return next(error);
        }

        next();
    };
}