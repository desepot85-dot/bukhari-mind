import { useEffect, useState } from "react";
import type { User, Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

/** Nom ou email affiché pour l'utilisateur (Google: full_name / name, sinon email). */
export function getDisplayName(user: User | null | undefined): string {
  if (!user) return "invité";
  const meta = user.user_metadata;
  const name =
    (meta?.full_name as string) ||
    (meta?.name as string) ||
    (meta?.user_name as string);
  if (name?.trim()) return name.trim();
  if (user.email) return user.email;
  return "invité";
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  return { user, session, loading, isAuthenticated: !!user };
}
