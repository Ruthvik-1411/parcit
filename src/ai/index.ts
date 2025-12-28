// Main AI module exports
export { invokeLLM } from './hooks';
export { generateResponse } from './api';
export { llm, LLM_CONFIG } from './config';

// Re-export everything as default for easy importing
import { invokeLLM } from './hooks';
import { generateResponse } from './api';
import { resultSchema } from './schema';
import { llm, LLM_CONFIG } from './config';

export default {
  // Hooks
  invokeLLM,
  // API functions
  generateResponse,
  // Schema utilities
  resultSchema,
  // Configuration
  llm,
  LLM_CONFIG
};