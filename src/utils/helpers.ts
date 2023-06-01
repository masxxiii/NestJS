/**
 * Trims a string of whitespaces.
 *
 * @returns string
 */
export function trim(input: string): string {
    return input.trim();
}

/**
 * Converts input to boolean.
 *
 * @returns boolean
 */
export function toBoolean(input: string | boolean): boolean {
    if (typeof input === 'string') {
        const response = input.toLowerCase();
        return response === 'true' || response === '1';
    }

    return input;
}

/**
 * Converts input to number.
 *
 * @returns number
 */
export function toNumber(input: string): number {
    return Number.parseInt(input, 10);
}

/**
 * Converts buffer to base64 string.
 *
 * @returns string
 */
export function toBase64(input: Buffer): string {
    return input.toString('base64');
}
