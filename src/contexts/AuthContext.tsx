import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { useSupabase } from '../hooks/useSupabase';

type AuthContextType = {
  user: User | null;
  isGuest: boolean;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (email: string, password: string) => Promise<void>;
  signInAsGuest: () => void;
  signOut: () => Promise<void>;
  isSupabaseConfigured: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isGuest, setIsGuest] = useState(false);
  const { supabase, isConfigured: isSupabaseConfigured } = useSupabase();

  useEffect(() => {
    if (!isSupabaseConfigured) return;

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [isSupabaseConfigured]);

  const signInWithEmail = async (email: string, password: string) => {
    if (!isSupabaseConfigured) throw new Error('请先配置 Supabase');
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    setIsGuest(false);
  };

  const signUpWithEmail = async (email: string, password: string) => {
    if (!isSupabaseConfigured) throw new Error('请先配置 Supabase');
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw error;
    setIsGuest(false);
  };

  const signInAsGuest = () => {
    setUser(null);
    setIsGuest(true);
  };

  const signOut = async () => {
    if (!isSupabaseConfigured) {
      setUser(null);
      setIsGuest(false);
      return;
    }
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    setUser(null);
    setIsGuest(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isGuest,
        signInWithEmail,
        signUpWithEmail,
        signInAsGuest,
        signOut,
        isSupabaseConfigured,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};