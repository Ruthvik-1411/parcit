import { useState, useCallback } from 'react';
import { generateResponse } from './api';
import { resultSchema } from './schema';

interface UseAIResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  execute: (...args: any[]) => Promise<void>;
  reset: () => void;
}

// add custom hook for custom schema here if needed
export function invokeLLM(): UseAIResult<typeof resultSchema> {
  const [data, setData] = useState<typeof resultSchema | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(async (prompt: string) => {
    setLoading(true);
    setError(null);
    try {
      const result = await generateResponse(prompt);
      setData(result);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setData(null);
    setError(null);
  }, []);

  return { data, loading, error, execute, reset };
}

export default {
  invokeLLM
};