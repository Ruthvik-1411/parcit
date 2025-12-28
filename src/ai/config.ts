import { initializeApp } from 'firebase/app';
import { getAI } from 'firebase/ai';

// Firebase configuration
const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: ''
};

// Model configuration
export const LLM_CONFIG = {
  // modelName: 'gemini-2.5-flash-lite'
  modelName: 'gemini-3-flash-preview'
} as const;

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Vertex AI
export const llm = getAI(app);

export default {
  llm,
  LLM_CONFIG
};