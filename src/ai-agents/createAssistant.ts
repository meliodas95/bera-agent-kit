import OpenAI from "openai";
import { Assistant } from "openai/resources/beta/assistants";
import { tools } from "../tools/allTools";
import { promts } from "../constants/promts";
/**
 * This function to creates an assistant using OpenAI’s Beta Assistants API
 * @param client - OpenAI client
 * @returns - The created assistant
 */

export async function createAssistant(client: OpenAI): Promise<Assistant> {
  return await client.beta.assistants.create({
    model: "gpt-4o-mini",
    temperature: 0.3,
    name: "My Assistant",
    instructions: promts,
    tools: Object.values(tools).map((tool) => tool.definition),
  });
}
