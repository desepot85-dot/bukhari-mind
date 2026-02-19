import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Loader2, Mail, Lock, LogIn } from "lucide-react";
import { toast } from "sonner";
import { getAuthErrorMessage } from "@/lib/auth-errors";

const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, loading: authLoading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState<"google" | "facebook" | null>(null);

  useEffect(() => {
    if (!authLoading && isAuthenticated) navigate("/", { replace: true });
  }, [isAuthenticated, authLoading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password) {
      toast.error("Veuillez remplir l'e-mail et le mot de passe.");
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
      if (error) throw error;
      toast.success("Connexion réussie.");
      navigate("/", { replace: true });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Erreur de connexion.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleOAuth = async (provider: "google" | "facebook") => {
    setOauthLoading(provider);
    try {
      const redirectTo = `${window.location.origin}/?welcome=1`;
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: { redirectTo },
      });
      if (error) throw error;
    } catch (err: unknown) {
      toast.error(getAuthErrorMessage(err, "login"));
      setOauthLoading(null);
    }
  };

  if (authLoading) return null;
  if (isAuthenticated) return null;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-background">
      <Card className="w-full max-w-md border-border/50 bg-card/80 backdrop-blur-sm shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
            Connexion
          </CardTitle>
          <CardDescription>
            Connectez-vous à votre compte Bukhari Mind
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Button
              type="button"
              variant="outline"
              className="w-full h-11 font-medium"
              onClick={() => handleOAuth("google")}
              disabled={oauthLoading !== null}
            >
              {oauthLoading === "google" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <svg className="h-4 w-4" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              )}
              <span className="ml-2">Continuer avec Google</span>
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full h-11 font-medium"
              onClick={() => handleOAuth("facebook")}
              disabled={oauthLoading !== null}
            >
              {oauthLoading === "facebook" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              )}
              <span className="ml-2">Continuer avec Facebook</span>
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Ou avec e-mail</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="login-email">E-mail</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="login-email"
                  type="email"
                  placeholder="vous@exemple.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-9"
                  autoComplete="email"
                  disabled={loading}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="login-password">Mot de passe</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="login-password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-9"
                  autoComplete="current-password"
                  disabled={loading}
                />
              </div>
            </div>
            <Button type="submit" className="w-full gap-2" disabled={loading}>
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <LogIn className="h-4 w-4" />
              )}
              Se connecter
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Pas encore de compte ?{" "}
            <Link to="/signup" className="font-medium text-primary hover:underline">
              S&apos;inscrire
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
