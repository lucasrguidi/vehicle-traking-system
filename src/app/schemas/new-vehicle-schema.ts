import { z } from 'zod';

export const newVehicleSchema = z.object({
  codigo: z
    .string({ required_error: 'Código é obrigatório' })
    .trim()
    .min(1, 'Código é obrigatório')
    .max(50, 'Máximo de 50 caractéres'),
  placa: z
    .string({ required_error: 'Código é obrigatório' })
    .trim()
    .min(1, 'Código é obrigatório')
    .max(50, 'Máximo de 50 caractéres'),
});
