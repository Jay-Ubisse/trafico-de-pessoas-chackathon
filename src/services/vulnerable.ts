import { VulnerablePersonProps } from "@/types/vulnerable-people";
import axios from "axios";

export async function registerVulnerablePerson({
  data,
}: {
  data: VulnerablePersonProps;
}) {
  try {
    const response = await axios.post("/api/vulnerable-people", data);

    return response;
  } catch (error: any) {
    console.log(error);
    return error;
  }
}

export async function getAllVulnerable(): Promise<
  VulnerablePersonProps[] | undefined
> {
  try {
    const response = await axios.get("/api/vulnerable-people");
    return response.data.vulnerables;
  } catch (error: any) {
    console.log(error);
    return error;
  }
}
