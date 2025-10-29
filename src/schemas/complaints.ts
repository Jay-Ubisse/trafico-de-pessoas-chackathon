import { z } from "zod";

export const complaintSchema = z.object({
  gender: z.string(),
  name: z.string().optional(),
  number: z.string().optional(),
  ageGroup: z.string(),
  means: z.string(),
  purpose: z.string().min(1, "O propósito é obrigatório"),
  action: z.string().min(1, "A ação é obrigatória"),
  location: z.string().min(1, "A localização é obrigatória"),
});
