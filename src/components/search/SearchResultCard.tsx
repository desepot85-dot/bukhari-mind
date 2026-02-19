import { useState, useRef, useEffect } from "react";
import { Star, User, Volume2, VolumeX, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { SearchResult } from "@/hooks/use-ai-search";
import { Link } from "react-router-dom";
import { toast } from "sonner";

interface SearchResultCardProps {
  result: SearchResult;
  index: number;
}

const relevanceStyles = {
  high: "border-primary/40 bg-primary/5",
  medium: "border-accent/40 bg-accent/5",
  low: "border-border",
};

const relevanceLabels = {
  high: "Très pertinent",
  medium: "Pertinent",
  low: "Connexe",
};

const ELEVEN_MODEL = "eleven_multilingual_v2";
// Voix Onyx : définir VITE_ELEVEN_LABS_VOICE_ID dans .env si vous avez l'ID depuis ElevenLabs Voice Library
const ELEVEN_VOICE_ID =
  import.meta.env.VITE_ELEVEN_LABS_VOICE_ID ?? "pNInz6obpgDQGcFmaJgB";

type PlayLanguage = "ar" | "fr" | "en";

function getTextByLang(result: SearchResult, lang: PlayLanguage): string {
  switch (lang) {
    case "ar":
      return result.textAr ?? result.textFr ?? "";
    case "fr":
      return result.textFr ?? "";
    case "en":
      return result.textEn ?? result.textFr ?? "";
    default:
      return result.textFr ?? "";
  }
}

const SearchResultCard = ({ result, index }: SearchResultCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const stopPlayback = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setIsPlaying(false);
    toast.info("Lecture arrêtée");
  };

  const playWithElevenLabs = async (text: string, lang: PlayLanguage) => {
    const trimmed = text?.trim();
    if (!trimmed) {
      toast.error("Aucun texte disponible pour cette langue.");
      return;
    }

    const apiKey = import.meta.env.VITE_ELEVEN_LABS_API_KEY;
    if (!apiKey?.trim()) {
      toast.error("Clé API ElevenLabs manquante. Vérifiez VITE_ELEVEN_LABS_API_KEY.");
      return;
    }

    if (isPlaying) stopPlayback();

    setIsLoading(true);
    let objectUrl: string | null = null;

    try {
      const res = await fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/${ELEVEN_VOICE_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "xi-api-key": apiKey,
            Accept: "audio/mpeg",
          },
          body: JSON.stringify({
            text: trimmed,
            model_id: ELEVEN_MODEL,
          }),
        }
      );

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        const message =
          err?.detail?.message ?? err?.message ?? res.statusText;
        throw new Error(message);
      }

      const blob = await res.blob();
      objectUrl = URL.createObjectURL(blob);
      const audio = new Audio(objectUrl);

      audioRef.current = audio;

      audio.onended = () => {
        setIsPlaying(false);
        audioRef.current = null;
        if (objectUrl) URL.revokeObjectURL(objectUrl);
      };

      audio.onerror = () => {
        setIsPlaying(false);
        setIsLoading(false);
        audioRef.current = null;
        if (objectUrl) URL.revokeObjectURL(objectUrl);
        toast.error("Erreur lors de la lecture audio.");
      };

      await audio.play();
      setIsLoading(false);
      setIsPlaying(true);
      toast.info(`Lecture du Hadith n°${result.hadithNumber}`);
    } catch (e) {
      setIsLoading(false);
      if (objectUrl) URL.revokeObjectURL(objectUrl);
      const message = e instanceof Error ? e.message : "Erreur lors de la génération audio.";
      toast.error(message);
    }
  };

  const handleTextClick = (lang: PlayLanguage) => {
    const text = getTextByLang(result, lang);
    if (!text?.trim()) return;
    playWithElevenLabs(text, lang);
  };

  const handlePlayButton = () => {
    if (isPlaying) {
      stopPlayback();
      return;
    }
    if (isLoading) return;
    handleTextClick("fr");
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <div
      className={cn(
        "rounded-xl border p-5 transition-all hover:shadow-elegant animate-fade-in",
        relevanceStyles[result.relevance],
      )}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary text-primary-foreground text-xs font-bold">
            {result.hadithNumber}
          </div>
          <div>
            <Link
              to={`/library/${result.bookId}`}
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              {result.bookName}
            </Link>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <User className="h-3 w-3" />
              {result.narrator}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePlayButton}
            disabled={isLoading}
            className={cn(
              "h-8 w-8 transition-colors",
              isPlaying
                ? "text-destructive hover:bg-destructive/10"
                : "text-primary hover:bg-primary/10",
            )}
            title={
              isLoading
                ? "Génération en cours…"
                : isPlaying
                  ? "Arrêter la lecture"
                  : "Écouter le Hadith (français)"
            }
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : isPlaying ? (
              <VolumeX className="h-4 w-4 animate-pulse" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </Button>

          <Badge
            variant={result.relevance === "high" ? "default" : "secondary"}
            className="shrink-0 text-xs"
          >
            {relevanceLabels[result.relevance]}
          </Badge>
        </div>
      </div>

      {result.textAr && (
        <button
          type="button"
          onClick={() => handleTextClick("ar")}
          className="w-full mb-3 rounded-lg bg-muted/50 p-3 text-right hover:bg-muted/70 transition-colors cursor-pointer border-0"
          dir="rtl"
        >
          <p className="text-sm leading-loose font-arabic text-foreground">
            {result.textAr}
          </p>
          <span className="sr-only">Écouter en arabe</span>
        </button>
      )}

      <button
        type="button"
        onClick={() => handleTextClick("fr")}
        className="w-full text-left mb-3 rounded-lg p-0 border-0 bg-transparent hover:opacity-90 transition-opacity cursor-pointer"
      >
        <p className="text-sm text-foreground/90 leading-relaxed">
          {result.textFr}
        </p>
        <span className="sr-only">Écouter en français</span>
      </button>

      {result.textEn != null && result.textEn !== "" && (
        <button
          type="button"
          onClick={() => handleTextClick("en")}
          className="w-full text-left mb-3 rounded-lg p-0 border-0 bg-transparent hover:opacity-90 transition-opacity cursor-pointer"
        >
          <p className="text-sm text-foreground/80 leading-relaxed">
            {result.textEn}
          </p>
          <span className="sr-only">Écouter en anglais</span>
        </button>
      )}

      <div className="rounded-lg bg-primary/5 border border-primary/10 p-3 mb-3">
        <p className="text-xs font-medium text-primary mb-1 flex items-center gap-1">
          <Star className="h-3 w-3" />
          Pertinence
        </p>
        <p className="text-sm text-muted-foreground">{result.explanation}</p>
      </div>

      {result.themes?.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {result.themes.map((theme, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground"
            >
              {theme}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResultCard;
