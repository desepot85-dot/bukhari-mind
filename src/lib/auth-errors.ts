/**
 * Messages d'erreur utilisateur pour l'authentification Supabase.
 * Quand le fournisseur Google n'est pas activé, on affiche un message clair.
 */
export function getAuthErrorMessage(error: unknown, context: "login" | "signup" = "login"): string {
  let msg = "";
  if (typeof error === "object" && error !== null) {
    const o = error as { message?: string; msg?: string };
    msg = o.message ?? o.msg ?? "";
  } else if (error instanceof Error) {
    msg = error.message;
  }
  const lower = msg.toLowerCase();

  if (lower.includes("provider is not enabled") || lower.includes("unsupported provider")) {
    return "Connexion Google non activée. Dans le tableau de bord Supabase : Authentication → Providers → Google → active le fournisseur et ajoute ton Client ID / Secret Google.";
  }

  if (context === "login") return msg || "Erreur de connexion.";
  return msg || "Erreur lors de l'inscription.";
}
