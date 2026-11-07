export function validate(schema, source) {
    return (req, res, next) => {
        const result = schema.safeParse(req[source]);

        if (!result.success) {
            return res.status(400).json({
                message: "Données invalides",
                errors: result.error.issues
            });
        }

        if (source === "query") {
            res.locals.query = result.data;
        } else {
            req[source] = result.data;
        }

        next();
    };
}