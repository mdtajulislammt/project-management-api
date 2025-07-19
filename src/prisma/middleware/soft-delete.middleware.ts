import { Prisma } from '@prisma/client';

export function softDeleteMiddleware(): Prisma.Middleware {
  return async (params, next) => {
    // TODO: Implement soft delete logic (e.g., filter out deletedAt != null)
    return next(params);
  };
} 