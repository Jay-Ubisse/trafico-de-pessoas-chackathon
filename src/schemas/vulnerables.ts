import { z } from "zod";

export const vulnerablePeopleSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  gender: z.string(),
  location: z.string(),
  number: z
    .string()
    .min(1, "O número é obrigatório")
    .max(9, "O número deve ter no máximo 9 caracteres"),
  ageGroup: z.string().min(0, "A idade é obrigatória"),
  childTraffickingScore: z.number(),
  domesticServitudeScore: z.number(),
  drugsCoercionScore: z.number(),
  forcedLaborScore: z.number(),
  fraudDeceptionScore: z.number(),
  organTraffickingScore: z.number(),
  sexualExploitationScore: z.number(),
  totalVulnerabilityScore: z.number(),
  vulnerabilityLevel: z.string(),
  vulnerabilityType: z.string(),
});
