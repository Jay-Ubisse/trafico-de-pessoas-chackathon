export interface ComplaintProps {
  id?: string;
  gender: string;
  name?: string;
  number?: string;
  ageGroup: String;
  status: ComplaintStatus;
  purpose: String;
  action: String;
  location: String;
  createdAt?: Date | string;
}

export enum ComplaintStatus {
  Em_Curso = "Em_Curso",
  Resolvido = "Resolvido",
  Não_Resolvido = "Não_Resolvido",
}
