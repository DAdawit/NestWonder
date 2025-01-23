import { z } from 'zod';

export const createUserZodSchema = z.object({
  firstName: z.string().min(2).max(10),
  lastName: z.string().min(2).max(10),
  email: z.string().email(),
  password: z.string().min(5).max(30),
});

export type CreateUserZodDto = z.infer<typeof createUserZodSchema>;
