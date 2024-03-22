import { z } from 'zod'

export const formSchema = z.object({
   name: z.string().min(1, 'Nome é obrigatório'),
   email: z.string().email('Forneça um e-mail válido').min(1, 'E-mail é obrigatorio'),
   password: z.string().min(8, 'É necessário pelo menos oito caracteres.')
   .regex(/(?=.*?[A-Z])/, 'É necessário pelo menos uma letra maiúscula')
   .regex(/(?=.*?[a-z])/, 'É necessário pelo menos uma letra minúscula')
   .regex(/(?=.*?[0-9])/, 'É necessário pelo menos um número.'),
   confirmPassword: z.string().min(1, 'É necessário confirmar a senha'),
   bio: z.string().min(1, 'Bio é obrigatório'),
   contact: z.string().min(1, 'Contato é obrigatório'),
   course_module: z.string().min(1, 'O módulo do curso é obrigatório'),
}).refine(({password, confirmPassword}) => password===confirmPassword, {message:'As senhas não correspondem', path: ['confirmPassword'],
})