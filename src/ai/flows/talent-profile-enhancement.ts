'use server';

/**
 * @fileOverview A talent profile enhancement AI agent.
 *
 * - talentProfileEnhancement - A function that handles the profile enhancement process.
 * - TalentProfileEnhancementInput - The input type for the talentProfileEnhancement function.
 * - TalentProfileEnhancementOutput - The return type for the talentProfileEnhancement function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TalentProfileEnhancementInputSchema = z.object({
  profileText: z
    .string()
    .describe('The current text of the talent profile.'),
  profilePhotoDataUri: z
    .string()
    .describe(
      "A photo from the talent's profile, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    )
    .optional(),
});
export type TalentProfileEnhancementInput = z.infer<
  typeof TalentProfileEnhancementInputSchema
>;

const TalentProfileEnhancementOutputSchema = z.object({
  suggestedProfileText: z
    .string()
    .describe('The suggested improved text for the talent profile.'),
  suggestedProfilePhotoImprovements: z
    .string()
    .describe('Suggestions for improving the profile photo.'),
});
export type TalentProfileEnhancementOutput = z.infer<
  typeof TalentProfileEnhancementOutputSchema
>;

export async function talentProfileEnhancement(
  input: TalentProfileEnhancementInput
): Promise<TalentProfileEnhancementOutput> {
  return talentProfileEnhancementFlow(input);
}

const prompt = ai.definePrompt({
  name: 'talentProfileEnhancementPrompt',
  input: {schema: TalentProfileEnhancementInputSchema},
  output: {schema: TalentProfileEnhancementOutputSchema},
  prompt: `You are an AI assistant designed to help talent members enhance their profile visibility and attract more opportunities. Analyze the talent's profile information and suggest improvements to the text of their profile and the photos they upload.

Current Profile Text: {{{profileText}}}

{{~#if profilePhotoDataUri}}
Current Profile Photo: {{media url=profilePhotoDataUri}}
{{~/if}}

Here are the suggestions:
- suggestedProfileText: Improved text for the talent profile.
- suggestedProfilePhotoImprovements: Suggestions for improving the profile photo.
`,
});

const talentProfileEnhancementFlow = ai.defineFlow(
  {
    name: 'talentProfileEnhancementFlow',
    inputSchema: TalentProfileEnhancementInputSchema,
    outputSchema: TalentProfileEnhancementOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
