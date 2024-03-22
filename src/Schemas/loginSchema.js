import { z } from 'zod'

export const loginSchema = z.object({
   email: z.string().email('Forneça um e-mail válido').min(1, 'E-mail é obrigatorio'),
   password: z.string().min(8, 'É necessário pelo menos oito caracteres.')
   .regex(/(?=.*?[A-Z])/, 'É necessário pelo menos uma letra maiúscula')
   .regex(/(?=.*?[a-z])/, 'É necessário pelo menos uma letra minúscula')
   .regex(/(?=.*?[0-9])/, 'É necessário pelo menos um número.'),
})
