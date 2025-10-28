import { z } from "zod";

export const vulnerablePeopleSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  number: z
    .string()
    .min(1, "O número é obrigatório")
    .max(9, "O número deve ter no máximo 9 caracteres"),
  message: z.string().min(1, "A mensagem não pode estar vazia"),
  ageGroup: z.number().min(0, "A idade é obrigatória"),
  vulnerable: z.string().min(1, "O estado de vulnerabilidade é obrigatório"),
  
});