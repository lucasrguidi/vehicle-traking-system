import { z } from 'zod';

export const loginSchema = z.object({
  username: z
    .string({ required_error: 'Usuaŕio é obrigatório' })
    .trim()
    .min(1, 'Usuaŕio é obrigatório'),
  password: z
    .string({ required_error: 'Senha é obrigatório' })
    .trim()
    .min(1, 'Senha é obrigatório'),
});
