import { z } from "zod";

export const sentMessagesSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  number: z
    .string()
    .min(1, "O número é obrigatório")
    .max(9, "O número deve ter no máximo 9 caracteres"),
  message: z.string().min(1, "A mensagem não pode estar vazia"),
});
