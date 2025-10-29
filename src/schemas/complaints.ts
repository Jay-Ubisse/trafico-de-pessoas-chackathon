import { z } from "zod";

export const complaintSchema = z.object({
  gender: z.enum(["Masculino", "Femenino"]),
  age: z
    .string()
    .min(1, "Este campo  é  de preenchimento obrigatório")
    .max(2, "A idade deve ter no máximo 2 caracteres"),
  region: z.string().min(1, "A região é obrigatória"),
  purpose: z.string().min(1, "O propósito é obrigatório"),
  acction: z.string().min(1, "A ação é obrigatória"),
  location: z.string().min(1, "A localização é obrigatória"),
});
