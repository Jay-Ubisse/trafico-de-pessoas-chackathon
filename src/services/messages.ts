import { MessageProps } from "@/types/messages";
import axios from "axios";

export async function sendMessages({ data }: { data: MessageProps[] }) {
  try {
    const response = await axios.post("/api/send-messages", data);

    return response;
  } catch (error: any) {
    console.log(error);
    return error;
  }
}

export async function getAllMessages(): Promise<MessageProps[] | undefined> {
  try {
    const response = await axios.get("/api/send-messages");
    return response.data.messages;
  } catch (error: any) {
    console.log(error);
    return error;
  }
}
