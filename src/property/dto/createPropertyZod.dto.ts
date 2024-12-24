import { z } from 'zod';

export const createPropertyZodSchema = z
  .object({
    name: z.string().min(2).max(10),
    description: z.string().min(2).max(10),
    area: z.number().positive(),
  })
  .required();

export type CreatePropertyZodDto = z.infer<typeof createPropertyZodSchema>;
