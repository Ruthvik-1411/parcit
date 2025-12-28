import { getGenerativeModel } from 'firebase/ai';
import { llm, LLM_CONFIG } from './config';
import { resultSchema } from './schema';

// Add schema as input if needed
export async function generateResponse(prompt: string): Promise<typeof resultSchema> {
  const model = getGenerativeModel(llm, {
    model: LLM_CONFIG.modelName,
    generationConfig: {
      responseMimeType: 'application/json',
      responseSchema: resultSchema,
      temperature: 0.2
    },
    // FIXME: url context + response schema are not supported together in models before gemini-3
    // Need to pass response schema directly in prompt for 2.5 family
    tools: [{urlContext: {}}]
  });

  try {
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    
    return JSON.parse(text) as typeof resultSchema;
  } catch (error) {
    console.error('Error generating content:', error);
    throw error;
  }
}

export default {
  generateResponse
};