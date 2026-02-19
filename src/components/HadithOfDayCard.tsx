import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Volume2, VolumeX, Loader2, Share2, Trophy } from "lucide-react";
import { toast } from "sonner";
import type { Hadith } from "@/data/bukhari-hadiths";

const ELEVEN_MODEL = "eleven_multilingual_v2";
const ELEVEN_VOICE_ID =
  import.meta.env.VITE_ELEVEN_LABS_VOICE_ID ?? "pNInz6obpgDQGcFmaJgB";

interface HadithOfDayCardProps {
  hadith: Hadith;
}

export default function HadithOfDayCard({ hadith }: HadithOfDayCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playWithElevenLabs = async () => {
    const text = hadith.textFr?.trim();
    if (!text) {
      toast.error("Aucun texte disponible.");
      return;
    }
    const apiKey = import.meta.env.VITE_ELEVEN_LABS_API_KEY;
    if (!apiKey?.trim()) {
      toast.error("Clé API ElevenLabs manquante.");
      return;
    }
    if (isPlaying && audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
      setIsPlaying(false);
      return;
    }
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
          body: JSON.stringify({ text, model_id: ELEVEN_MODEL }),
        }
      );
      if (!res.ok) throw new Error("Erreur API");
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
        if (objectUrl) URL.revokeObjectURL(objectUrl);
        toast.error("Erreur lecture audio.");
      };
      await audio.play();
      setIsPlaying(true);
      setIsLoading(false);
      toast.info("Lecture du Hadith du jour");
    } catch (e) {
      setIsLoading(false);
      if (objectUrl) URL.revokeObjectURL(objectUrl);
      toast.error("Impossible de lire l'audio.");
    }
  };

  const shareText = `${hadith.textFr}\n\n— Hadith n°${hadith.number} (Sahih al-Bukhari)`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Hadith du jour",
          text: shareText,
        })
        .then(() => toast.success("Partagé !"))
        .catch(() => copyToClipboard());
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareText);
    toast.success("Texte copié dans le presse-papier.");
  };

  return (
    <Card className="overflow-hidden border-2 border-primary/20 bg-card/80 backdrop-blur-sm shadow-elegant">
      <div className="p-6 space-y-6">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-primary">Hadith du Jour</h2>
          <p className="text-xs text-muted-foreground mt-1">
            Hadith n°{hadith.number} • Sahih al-Bukhari
          </p>
        </div>
        {hadith.textAr && (
          <div className="rounded-xl bg-muted/50 p-4 text-right" dir="rtl">
            <p className="text-base leading-loose font-arabic text-foreground">
              {hadith.textAr}
            </p>
          </div>
        )}
        <p className="text-sm text-foreground/90 leading-relaxed">
          {hadith.textFr}
        </p>
        {hadith.narrator && (
          <p className="text-xs text-muted-foreground">{hadith.narrator}</p>
        )}
        <div className="flex flex-wrap gap-3 justify-center pt-2">
          <Button
            onClick={playWithElevenLabs}
            disabled={isLoading}
            className="gap-2"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : isPlaying ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
            {isPlaying ? "Arrêter" : "Écouter avec la voix Onyx"}
          </Button>
          <Button variant="outline" asChild className="gap-2">
            <Link to="/quiz">
              <Trophy className="h-4 w-4" />
              Faire le quiz du jour
            </Link>
          </Button>
          <Button variant="outline" size="icon" onClick={handleShare} title="Partager">
            <Share2 className="h-4 w-4" />
          </Button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button variant="outline" size="icon" title="Partager sur WhatsApp">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </Button>
          </a>
        </div>
      </div>
    </Card>
  );
}
