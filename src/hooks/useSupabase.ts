import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export function useSupabase() {
  const [isConfigured, setIsConfigured] = useState(false);

  useEffect(() => {
    const checkConfiguration = () => {
      const url = import.meta.env.VITE_SUPABASE_URL;
      const key = import.meta.env.VITE_SUPABASE_ANON_KEY;
      setIsConfigured(Boolean(url && key));
    };

    checkConfiguration();
  }, []);

  return {
    supabase,
    isConfigured,
  };
}