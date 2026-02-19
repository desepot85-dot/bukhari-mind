import { useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Loader2, Trophy, Bell, BellOff, Moon } from "lucide-react";
import { useHadithOfDay } from "@/hooks/use-hadiths";
import { useNotifications } from "@/hooks/use-notifications";
import { useVerseOfDay } from "@/hooks/use-verse-of-day";
import { useAuth, getDisplayName } from "@/hooks/use-auth";
import { getMessageOfDay } from "@/lib/daily-content";
import HadithOfDayCard from "@/components/HadithOfDayCard";
import VerseOfDayCard from "@/components/VerseOfDayCard";
import CommunityMessageCard from "@/components/CommunityMessageCard";
import { toast } from "sonner";
import Features from "@/components/Features";
import Authenticity from "@/components/Authenticity";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

function formatHijri(date: Date): string {
  try {
    const formatter = new Intl.DateTimeFormat("fr-FR", {
      calendar: "islamic-umalqura",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return formatter.format(date);
  } catch {
    return "";
  }
}

function formatGregorian(date: Date): string {
  return new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

const Index = () => {
  const today = new Date();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { user, isAuthenticated } = useAuth();
  const displayName = getDisplayName(user);
  const { hadithOfDay, isLoading } = useHadithOfDay();
  const { data: verseOfDay, isLoading: verseLoading } = useVerseOfDay(today);
  const communityMessage = getMessageOfDay(today);
  const {
    remindersEnabled,
    isLoading: notifLoading,
    error: notifError,
    enableReminders,
    disableReminders,
    supported: notificationsSupported,
  } = useNotifications();
  const dateHijri = formatHijri(today);
  const dateGregorian = formatGregorian(today);

  useEffect(() => {
    if (searchParams.get("welcome") === "1" && isAuthenticated && user) {
      const name = getDisplayName(user);
      toast.success(`Bienvenue, ${name} !`, { duration: 5000 });
      navigate("/", { replace: true });
    }
  }, [searchParams, isAuthenticated, user, navigate]);

  const handleToggleReminders = async () => {
    if (remindersEnabled) {
      disableReminders();
      toast.success("Rappels désactivés.");
    } else {
      const ok = await enableReminders();
      if (ok) toast.success("Rappels activés : tu seras notifié chaque matin à 08h.");
      else if (notifError) toast.error(notifError);
    }
  };

  return (
    <div className="min-h-screen pb-24">
      {/* En-tête : dates */}
      <header className="border-b border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-sm text-muted-foreground">{dateGregorian}</p>
              {dateHijri && (
                <p className="text-lg font-semibold text-primary mt-1">
                  {dateHijri}
                </p>
              )}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold gradient-primary bg-clip-text text-transparent">
              Bukhari Mind
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Carte de bienvenue */}
        <Card className="mb-8 p-6 bg-card/80 backdrop-blur-sm border-primary/10">
          <p className="text-xl font-semibold text-foreground mb-2">
            Salam, {displayName}
          </p>
          <p className="text-muted-foreground text-sm mb-4">
            Découvrez le Hadith du jour et testez vos connaissances.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/quiz">
              <Button className="gap-2">
                <Trophy className="h-4 w-4" />
                Faire le quiz du jour
              </Button>
            </Link>
            <Link to="/ramadan">
              <Button variant="outline" className="gap-2">
                <Moon className="h-4 w-4" />
                Calendrier Ramadan
              </Button>
            </Link>
            {notificationsSupported && (
              <Button
                variant={remindersEnabled ? "secondary" : "outline"}
                className="gap-2"
                onClick={handleToggleReminders}
                disabled={notifLoading}
              >
                {notifLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : remindersEnabled ? (
                  <BellOff className="h-4 w-4" />
                ) : (
                  <Bell className="h-4 w-4" />
                )}
                {remindersEnabled ? "Désactiver les rappels" : "Activer les rappels"}
              </Button>
            )}
          </div>
          {notifError && !remindersEnabled && (
            <p className="text-sm text-destructive mt-2">{notifError}</p>
          )}
          {remindersEnabled && (
            <p className="text-xs text-muted-foreground mt-2">
              Rappel à 08h00 chaque matin (si l’app est ouverte ou à ta prochaine visite).
            </p>
          )}
        </Card>

        {/* Hadith du jour */}
        <section className="mb-12">
          {isLoading ? (
            <Card className="p-12 flex flex-col items-center justify-center gap-4">
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
              <p className="text-muted-foreground">Chargement du Hadith du jour...</p>
            </Card>
          ) : hadithOfDay ? (
            <HadithOfDayCard hadith={hadithOfDay} />
          ) : (
            <Card className="p-8 text-center">
              <p className="text-muted-foreground">
                Aucun hadith disponible pour aujourd&apos;hui. Réessayez plus tard.
              </p>
              <Link to="/search" className="mt-4 inline-block">
                <Button variant="outline">Rechercher des hadiths</Button>
              </Link>
            </Card>
          )}
        </section>

        {/* Verset du jour */}
        <section className="mb-8">
          <VerseOfDayCard verse={verseOfDay ?? null} isLoading={verseLoading} />
        </section>

        {/* Message à la Communauté */}
        <section className="mb-12">
          <CommunityMessageCard message={communityMessage} />
        </section>
      </main>

      <Features />
      <Authenticity />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
