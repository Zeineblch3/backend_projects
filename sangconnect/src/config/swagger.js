import swaggerJsdoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.3",

        info: {
            title: "SangConnect API",
            version: "1.0.0",
            description: `
                API REST de gestion des dons de sang.

                Cette API permet de gérer les donneurs,
                les utilisateurs, les centres de collecte
                et les opérations liées aux dons de sang.
            `
        },

        servers: [
            {
                url: "http://localhost:3000",
                description: "Serveur de développement"
            }
        ],

        tags: [
            {
                name: "Donors",
                description: "Gestion des donneurs"
            },
            {
                name: "Authentication",
                description: "Authentification des utilisateurs"
            },
            {
                name: "Users",
                description: "Gestion des utilisateurs"
            }
        ],

        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                    description: "Saisir le token JWT obtenu après authentification."
                }
            },

            schemas: {
                Donneur: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer",
                            description: "Identifiant du donneur",
                            example: 1
                        },
                        nom: {
                            type: "string",
                            description: "Nom du donneur",
                            example: "Ben Ali"
                        },
                        prenom: {
                            type: "string",
                            description: "Prénom du donneur",
                            example: "Ahmed"
                        },
                        email: {
                            type: "string",
                            format: "email",
                            description: "Adresse email",
                            example: "ahmed@example.com"
                        },
                        groupeSanguin: {
                            type: "string",
                            description: "Groupe sanguin",
                            example: "A+"
                        },
                        telephone: {
                            type: "string",
                            description: "Numéro de téléphone",
                            example: "12345678"
                        }
                    },
                    required: ["nom", "prenom", "groupeSanguin"]
                },

                CreateDonneur: {
                    type: "object",
                    properties: {
                        nom: {
                            type: "string",
                            example: "Ben Ali"
                        },
                        prenom: {
                            type: "string",
                            example: "Ahmed"
                        },
                        email: {
                            type: "string",
                            format: "email",
                            example: "ahmed@example.com"
                        },
                        groupeSanguin: {
                            type: "string",
                            example: "A+"
                        },
                        telephone: {
                            type: "string",
                            example: "12345678"
                        }
                    },
                    required: ["nom", "prenom", "groupeSanguin"]
                },
                LoginRequest: {
                    type: "object",
                    properties: {
                        email: {
                            type: "string",
                            format: "email",
                            example: "ahmed@sangconnect.tn"
                        },
                        password: {
                            type: "string",
                            format: "password",
                            example: "MotDePasse123"
                        }
                    },
                    required: ["email", "password"]
                },

                LoginResponse: {
                    type: "object",
                    properties: {
                        token: {
                            type: "string",
                            description: "Token JWT d'accès."
                        },
                        user: {
                            type: "object",
                            properties: {
                                id: {
                                    type: "integer",
                                    example: 1
                                },
                                nom: {
                                    type: "string",
                                    example: "Ahmed"
                                },
                                email: {
                                    type: "string",
                                    example: "ahmed@sangconnect.tn"
                                },
                                role: {
                                    type: "string",
                                    example: "AGENT_CENTRE"
                                }
                            }
                        }
                    }
                },
                ErrorResponse: {
                    type: "object",
                    properties: {
                        message: {
                            type: "string",
                            example: "Données invalides"
                        },
                        errors: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    code: {
                                        type: "string",
                                        example: "invalid_value"
                                    },
                                    path: {
                                        type: "array",
                                        items: {
                                            type: "string"
                                        },
                                        example: ["groupeSanguin"]
                                    },
                                    message: {
                                        type: "string",
                                        example: "Groupe sanguin invalide"
                                    }
                                }
                            }
                        }
                    },
                    required: ["message"]
                }
            }
        },

        security: [
            {
                bearerAuth: []
            }
        ]
    },

    apis: ["./src/routes/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;