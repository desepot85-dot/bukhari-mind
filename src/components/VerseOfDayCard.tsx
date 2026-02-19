import { Card } from "@/components/ui/card";
import type { VerseOfDayResult } from "@/lib/daily-content";

interface VerseOfDayCardProps {
  verse: VerseOfDayResult | null;
  isLoading?: boolean;
}

export default function VerseOfDayCard({ verse, isLoading }: VerseOfDayCardProps) {
  if (isLoading) {
    return (
      <Card className="p-6 bg-card/80 backdrop-blur-sm animate-pulse">
        <div className="h-4 bg-muted rounded w-1/3 mb-4" />
        <div className="h-6 bg-muted rounded w-full mb-2" />
        <div className="h-4 bg-muted rounded w-2/3" />
      </Card>
    );
  }
  if (!verse) return null;
  return (
    <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/10">
      <h3 className="text-sm font-semibold text-primary mb-2">Verset du jour</h3>
      <p className="text-xs text-muted-foreground mb-3">
        Sourate {verse.surahName}, verset {verse.verseNumber}
      </p>
      {verse.textAr && (
        <p className="text-base font-arabic text-right leading-loose text-foreground mb-3" dir="rtl">
          {verse.textAr}
        </p>
      )}
      {verse.textFr && (
        <p className="text-sm text-muted-foreground leading-relaxed">
          {verse.textFr}
        </p>
      )}
    </Card>
  );
}
