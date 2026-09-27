import ApiError from './ApiError';

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Trims and validates a required string field, throwing a 400 ApiError otherwise. */
export const requireString = (value: unknown, field: string): string => {
  if (typeof value !== 'string' || !value.trim()) {
    throw new ApiError(400, 'VALIDATION_ERROR', `${field} is required`);
  }
  return value.trim();
};

/** Validates a required email field, throwing a 400 ApiError otherwise. */
export const requireEmail = (value: unknown): string => {
  if (typeof value !== 'string' || !EMAIL_REGEX.test(value)) {
    throw new ApiError(400, 'VALIDATION_ERROR', 'A valid email is required');
  }
  return value.trim();
};
