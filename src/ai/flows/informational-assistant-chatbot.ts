'use server';
/**
 * @fileOverview An AI-powered information assistant for the 'Zero G Hub' landing page.
 *
 * - informationalAssistantChatbot - A function that handles user questions about Team Zero Gravity, projects, and members.
 * - InformationalAssistantChatbotInput - The input type for the informationalAssistantChatbot function.
 * - InformationalAssistantChatbotOutput - The return type for the informationalAssistantChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InformationalAssistantChatbotInputSchema = z.object({
  question: z.string().describe('The user\'s question about Team Zero Gravity, its projects, or members.'),
  aboutUsContent: z.string().describe('The text content of the \'About Us\' section of the landing page.').optional(),
  projectsContent: z.string().describe('The text content of the \'Projects\' section of the landing page.').optional(),
  membersContent: z.string().describe('The text content of the \'Members\' section of the landing page.').optional(),
});
export type InformationalAssistantChatbotInput = z.infer<typeof InformationalAssistantChatbotInputSchema>;

const InformationalAssistantChatbotOutputSchema = z.object({
  answer: z.string().describe('The AI\'s answer to the user\'s question, based on the provided landing page content.'),
});
export type InformationalAssistantChatbotOutput = z.infer<typeof InformationalAssistantChatbotOutputSchema>;

export async function informationalAssistantChatbot(input: InformationalAssistantChatbotInput): Promise<InformationalAssistantChatbotOutput> {
  return informationalAssistantChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'informationalAssistantChatbotPrompt',
  input: {schema: InformationalAssistantChatbotInputSchema},
  output: {schema: InformationalAssistantChatbotOutputSchema},
  prompt: `You are an AI-powered information assistant for 'Team Zero Gravity's' landing page. Your task is to answer user questions truthfully and concisely, using ONLY the provided context about the team, its projects, and members.

If the information required to answer a question is NOT present in the provided context, state clearly that you cannot find the answer based on the given information. Do NOT make up information.

--- Start of Context ---

About Us Section:
{{#if aboutUsContent}}{{{aboutUsContent}}}{{#else}}No 'About Us' content provided.{{/if}}

Projects Section:
{{#if projectsContent}}{{{projectsContent}}}{{#else}}No 'Projects' content provided.{{/if}}

Members Section:
{{#if membersContent}}{{{membersContent}}}{{#else}}No 'Members' content provided.{{/if}}

--- End of Context ---

User Question: {{{question}}}`,
});

const informationalAssistantChatbotFlow = ai.defineFlow(
  {
    name: 'informationalAssistantChatbotFlow',
    inputSchema: InformationalAssistantChatbotInputSchema,
    outputSchema: InformationalAssistantChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
