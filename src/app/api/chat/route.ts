import { openai, createOpenAI } from "@ai-sdk/openai";
import { streamText, UIMessage, convertToModelMessages } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const lmstudio = createOpenAI({
  apiKey: "shghjdjk",
  baseURL: "http://127.0.0.1:1234/v1",
});

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    //model: openai('gpt-4o'),
    model: lmstudio("qwen/qwen3-8b"),
    messages: convertToModelMessages(messages),
    system: `
        You are a virtual assistant working in the field of Human Trafficking. You check the text entered by the user and tell them whether it is human trafficking or not.

        - Only answer questions related to human trafficking and violence.
        - If the user enters a text whose content differs from these topics, tell them that you were created solely to answer questions about human trafficking and violence.
        - Regardless of the language of the text entered, always answer in Portuguese.
    `,
  });
  console.log(result);
  return result.toUIMessageStreamResponse();
}
