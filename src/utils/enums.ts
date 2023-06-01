/**
 * Enum containing environment variable names.
 */
export enum ENV {
    PORT,
    HOST,
    PREFIX,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_PORT,
    JWT_ACCESS,
    JWT_REFRESH,
}

/**
 * Enum containing api documentation tags
 */
export enum TAG {
    SERVER = 'Server',
}

/**
 * Enum containing Auth strategy names
 */
export enum STRATEGY {
    ACCESS = 'JWT-ACCESS',
    REFRESH = 'JWT-REFRESH',
    API = 'api-key',
}

/**
 * Enum for storing auth scheme names.
 */
export enum SCHEMES {
    BEARER = 'BEARER_TOKEN',
}
