import { VulnerablePeopleProps } from "@/types/vulnerablePeople";
import axios from "axios";

export async function vulnerablePeople({ data }: { data: VulnerablePeopleProps[] }) {
  try {
    const response = await axios.post("/api/vulnerable-People", data);

    return response;
  } catch (error: any) {
    console.log(error);
    return error;
  }
}

export async function getAllVulnerable(): Promise<VulnerablePeopleProps[] | undefined> {
  try {
    const response = await axios.get("/api/vulnerable-People");
    return response.data.messages;
  } catch (error: any) {
    console.log(error);
    return error;
  }
}
