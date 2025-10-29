export interface VulnerablePeopleProps {
  id?: string;
  number: string;
  name: string;
  ageGroup: number;
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
