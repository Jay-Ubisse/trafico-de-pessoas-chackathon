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
        You are a virtual assistant that receives reports related to human trafficking and violence. You smooth the text entered by the user, register the report, and inform the user that the report has been registered.

        - Respond to and register only complaints related to human trafficking and violence.
        - If the user enters text whose content differs from these topics (human trafficking and violence), tell them that you were created by SAFENET exclusively to receive reports and respond to cases of human trafficking and violence (in a few words)..
        - Regardless of the language of the text entered, always answer in Portuguese.
        - If the text refers to human trafficking, respond that the complaint has been received and registered and that the authorities will follow up on the case. 
        - Always give brief answers.
    `,
  });

  return result.toUIMessageStreamResponse();
}
