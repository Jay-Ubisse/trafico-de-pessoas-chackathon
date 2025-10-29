import { ComplaintProps } from "@/types/complaints";
import axios from "axios";

export async function registerComplain({ data }: { data: ComplaintProps }) {
  try {
    const response = await axios.post("/api/complaints", data);

    return response;
  } catch (error: any) {
    console.log(error);
    return error;
  }
}

export async function getAllComplaints(): Promise<
  ComplaintProps[] | undefined
> {
  try {
    const response = await axios.get("/api/complaints");
    return response.data.complaints;
  } catch (error: any) {
    console.log(error);
    return error;
  }
}
