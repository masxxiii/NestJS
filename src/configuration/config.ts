import * as Joi from 'joi';

/**
 * Validation options for environment variables
 */
export const ConfigOptions = {
    allowUnknown: true,
    abortEarly: true,
};

/**
 * Validation schema for environment variables
 */
export const EnvironmentValidation = Joi.object({
    NODE_ENV: Joi.string().valid('development', 'production').default('development'),
    PORT: Joi.number().default(3000),
    HOST: Joi.string().default('localhost'),
    PREFIX: Joi.string().default('api'),
    DB_USER: Joi.string(),
    DB_PASSWORD: Joi.string(),
    DB_NAME: Joi.string(),
    DB_PORT: Joi.string(),
    JWT_ACCESS: Joi.string(),
    JWT_REFRESH: Joi.string(),
});
