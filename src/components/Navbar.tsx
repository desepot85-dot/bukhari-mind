import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home, Search, BookOpen, Trophy, Moon, LogIn, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/use-auth";
import { supabase } from "@/integrations/supabase/client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { to: "/", label: "Accueil", icon: Home },
  { to: "/search", label: "Hadiths", icon: Search },
  { to: "/quran", label: "Coran", icon: BookOpen },
  { to: "/ramadan", label: "Ramadan", icon: Moon },
  { to: "/quiz", label: "Quiz", icon: Trophy },
];

function getInitials(email: string | undefined): string {
  if (!email) return "?";
  const part = email.split("@")[0];
  if (part.length >= 2) return part.slice(0, 2).toUpperCase();
  return part.slice(0, 1).toUpperCase();
}

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, loading } = useAuth();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/", { replace: true });
  };

  return (
    <nav
      className={cn(
        "fixed bottom-4 left-1/2 -translate-x-1/2 z-50",
        "rounded-2xl border border-white/20 bg-white/10 dark:bg-black/20",
        "backdrop-blur-xl shadow-lg shadow-black/5",
        "px-2 py-2"
      )}
    >
      <ul className="flex items-center gap-1">
        {navLinks.map(({ to, label, icon: Icon }) => {
          const isActive =
            to === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(to);
          return (
            <li key={to}>
              <Link
                to={to}
                className={cn(
                  "flex flex-col items-center justify-center gap-0.5",
                  "min-w-[64px] py-2 px-3 rounded-xl",
                  "text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/10 dark:hover:bg-white/5"
                )}
                title={label}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs">{label}</span>
              </Link>
            </li>
          );
        })}
        <li className="ml-1">
          {!loading && (
            isAuthenticated && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full h-10 w-10 p-0 shrink-0"
                    aria-label="Menu compte"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.user_metadata?.avatar_url} alt={user.email ?? ""} />
                      <AvatarFallback className="text-xs bg-primary/20 text-primary">
                        {getInitials(user.email)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" side="top" className="mb-2">
                  <DropdownMenuItem onClick={handleSignOut} className="gap-2 cursor-pointer">
                    <LogOut className="h-4 w-4" />
                    Déconnexion
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                to="/login"
                className={cn(
                  "flex flex-col items-center justify-center gap-0.5",
                  "min-w-[64px] py-2 px-3 rounded-xl",
                  "text-sm font-medium transition-all duration-200",
                  "text-muted-foreground hover:text-foreground hover:bg-white/10 dark:hover:bg-white/5"
                )}
                title="Se connecter"
              >
                <LogIn className="h-5 w-5" />
                <span className="text-xs">Connexion</span>
              </Link>
            )
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
