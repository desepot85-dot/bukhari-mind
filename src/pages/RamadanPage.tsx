import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Moon } from "lucide-react";
import { getRamadanMessageForDay } from "@/lib/ramadan-messages";
import { cn } from "@/lib/utils";

const RAMADAN_DAYS = 30;
const STORAGE_PREFIX = "bukhari-mind-ramadan-fasted";

/** Premier jour du Ramadan (année courante). À ajuster selon le calendrier lunaire. */
function getRamadanStartDate(year: number): Date {
  const starts: Record<number, string> = {
    2025: "2025-03-01",
    2026: "2026-02-18",
    2024: "2024-03-11",
  };
  const str = starts[year] ?? `${year}-03-01`;
  return new Date(str + "T00:00:00");
}

function getRamadanDayNumber(today: Date, start: Date): number | null {
  const t = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
  const s = new Date(start.getFullYear(), start.getMonth(), start.getDate()).getTime();
  const diff = Math.floor((t - s) / (24 * 60 * 60 * 1000));
  if (diff < 0 || diff >= RAMADAN_DAYS) return null;
  return diff + 1;
}

function getStorageKey(year: number, day: number): string {
  return `${STORAGE_PREFIX}-${year}-${day}`;
}

function loadFasted(year: number): Set<number> {
  try {
    const stored = localStorage.getItem(`${STORAGE_PREFIX}-${year}`);
    if (!stored) return new Set();
    const arr = JSON.parse(stored) as number[];
    return new Set(Array.isArray(arr) ? arr : []);
  } catch {
    return new Set();
  }
}

function saveFasted(year: number, fasted: Set<number>) {
  try {
    localStorage.setItem(
      `${STORAGE_PREFIX}-${year}`,
      JSON.stringify([...fasted])
    );
  } catch {
    // ignore
  }
}

export default function RamadanPage() {
  const today = new Date();
  const year = today.getFullYear();
  const startDate = getRamadanStartDate(year);
  const [fasted, setFasted] = useState<Set<number>>(() => loadFasted(year));
  const [selectedDay, setSelectedDay] = useState<number | null>(() =>
    getRamadanDayNumber(today, startDate)
  );

  const currentRamadanDay = getRamadanDayNumber(today, startDate);
  const isDuringRamadan = currentRamadanDay !== null;

  useEffect(() => {
    saveFasted(year, fasted);
  }, [year, fasted]);

  const toggleDay = (day: number) => {
    setFasted((prev) => {
      const next = new Set(prev);
      if (next.has(day)) next.delete(day);
      else next.add(day);
      return next;
    });
  };

  const dayDate = (day: number) => {
    const d = new Date(startDate);
    d.setDate(d.getDate() + day - 1);
    return d;
  };

  const progress = fasted.size;
  const messageDay = selectedDay ?? currentRamadanDay ?? 1;
  const message = getRamadanMessageForDay(messageDay);

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="sticky top-0 z-40 bg-card/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour
              </Button>
            </Link>
            <h1 className="text-xl md:text-2xl font-bold gradient-primary bg-clip-text text-transparent flex items-center gap-2">
              <Moon className="h-6 w-6" />
              Ramadan
            </h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-2xl">
        {/* Progression */}
        <Card className="p-4 mb-6 bg-primary/5 border-primary/20">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">
              Jours jeûnés
            </span>
            <span className="text-2xl font-bold text-primary">
              {progress} / {RAMADAN_DAYS}
            </span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${(progress / RAMADAN_DAYS) * 100}%` }}
            />
          </div>
        </Card>

        {/* Message du jour (rappels Ramadan) */}
        <section className="mb-8">
          <Card className="p-5 bg-card/80 backdrop-blur-sm border-accent/20">
            <h2 className="text-sm font-semibold text-primary mb-2 flex items-center gap-2">
              <Moon className="h-4 w-4" />
              Rappel {selectedDay != null ? `— Jour ${selectedDay}` : isDuringRamadan ? `du jour (Jour ${messageDay})` : ""}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {message}
            </p>
          </Card>
        </section>

        {/* Calendrier : 30 jours avec cases à cocher */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Calendrier du mois
          </h2>
          <p className="text-xs text-muted-foreground mb-4">
            Coche « J'ai jeûné aujourd'hui » pour chaque jour. Ta progression est enregistrée localement.
          </p>
          <div className="grid gap-2">
            {Array.from({ length: RAMADAN_DAYS }, (_, i) => {
              const day = i + 1;
              const date = dayDate(day);
              const isChecked = fasted.has(day);
              const isToday =
                currentRamadanDay === day &&
                date.toDateString() === today.toDateString();
              const isFuture = date.getTime() > today.getTime();
              return (
                <Card
                  key={day}
                  className={cn(
                    "p-3 flex items-center gap-4 transition-colors cursor-pointer",
                    isToday && "ring-2 ring-primary",
                    selectedDay === day && "bg-primary/10"
                  )}
                  onClick={() => setSelectedDay(day)}
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0" onClick={(e) => e.stopPropagation()}>
                    <Checkbox
                      id={`ramadan-${day}`}
                      checked={isChecked}
                      onCheckedChange={() => toggleDay(day)}
                      disabled={isFuture}
                    />
                    <label
                      htmlFor={`ramadan-${day}`}
                      className="flex-1 cursor-pointer text-sm font-medium"
                    >
                      Jour {day}
                      <span className="text-muted-foreground font-normal ml-2">
                        {date.toLocaleDateString("fr-FR", {
                          weekday: "short",
                          day: "numeric",
                          month: "short",
                        })}
                      </span>
                      {isToday && (
                        <span className="ml-2 text-xs text-primary">Aujourd'hui</span>
                      )}
                    </label>
                  </div>
                  {isChecked && (
                    <span className="text-xs text-green-600 dark:text-green-400 shrink-0">
                      Jeûné
                    </span>
                  )}
                </Card>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
