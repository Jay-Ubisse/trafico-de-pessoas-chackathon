export interface VulnerablePersonProps {
  id?: string;
  number: string;
  name: string;
  ageGroup: string;
  gender: string;
  location: string;
  childTraffickingScore: number;
  domesticServitudeScore: number;
  drugsCoercionScore: number;
  forcedLaborScore: number;
  fraudDeceptionScore: number;
  organTraffickingScore: number;
  sexualExploitationScore: number;
  totalVulnerabilityScore: number;
  vulnerabilityLevel: string;
  vulnerabilityType: string;
  createdAt?: Date | string;
}
