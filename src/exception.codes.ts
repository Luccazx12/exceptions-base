/**
 * Adding a `code` string with a custom status code for every
 * exception is a good practice, since when that exception
 * is transferred to another process `instanceof` check
 * cannot be performed anymore so a `code` string is used instead.
 * code constants can be stored in a separate file so they
 * can be shared and reused on a receiving side (code sharing is
 * useful when developing fullstack apps or microservices)
 */
export const ARGUMENT_INVALID = 'ARGUMENT_INVALID';
export const ARGUMENT_OUT_OF_RANGE = 'ARGUMENT_OUT_OF_RANGE';
export const ARGUMENT_NOT_PROVIDED = 'ARGUMENT_NOT_PROVIDED';
export const NOT_FOUND = 'NOT_FOUND';
export const CONFLICT = 'CONFLICT';
export const INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR';
