import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Loader2, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";

const API_BASE = "https://api.alquran.cloud/v1";
const AUDIO_BASE = "https://cdn.islamic.network/quran/audio/128/ar.alafasy";
const FR_EDITION = "fr.hamidullah";

interface SurahListItem {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
}

interface Ayah {
  number: number;
  text: string;
  numberInSurah: number;
}

interface SurahDetail {
  number: number;
  name: string;
  englishName: string;
  numberOfAyahs: number;
  ayahs: Ayah[];
}

export default function QuranPage() {
  const [surahs, setSurahs] = useState<SurahListItem[]>([]);
  const [loadingList, setLoadingList] = useState(true);
  const [selectedSurah, setSelectedSurah] = useState<number | null>(null);
  const [surahAr, setSurahAr] = useState<SurahDetail | null>(null);
  const [surahFr, setSurahFr] = useState<SurahDetail | null>(null);
  const [loadingSurah, setLoadingSurah] = useState(false);
  const [playingVerse, setPlayingVerse] = useState<string | null>(null);
  const [playingSurah, setPlayingSurah] = useState(false);
  const surahAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoadingList(true);
    fetch(`${API_BASE}/surah`)
      .then((res) => res.json())
      .then((data) => {
        if (cancelled || data.code !== 200) return;
        setSurahs(data.data || []);
      })
      .catch(() => setSurahs([]))
      .finally(() => setLoadingList(false));
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (selectedSurah == null) {
      setSurahAr(null);
      setSurahFr(null);
      return;
    }
    let cancelled = false;
    setLoadingSurah(true);
    setSurahAr(null);
    setSurahFr(null);
    Promise.all([
      fetch(`${API_BASE}/surah/${selectedSurah}`).then((r) => r.json()),
      fetch(`${API_BASE}/surah/${selectedSurah}/${FR_EDITION}`).then((r) =>
        r.json()
      ),
    ])
      .then(([dataAr, dataFr]) => {
        if (cancelled) return;
        if (dataAr?.code === 200 && dataAr?.data) setSurahAr(dataAr.data);
        if (dataFr?.code === 200 && dataFr?.data) setSurahFr(dataFr.data);
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setLoadingSurah(false);
      });
    return () => {
      cancelled = true;
    };
  }, [selectedSurah]);

  const ayahsAr = surahAr?.ayahs ?? [];
  const ayahsFr = surahFr?.ayahs ?? [];
  const getFrText = (numberInSurah: number) =>
    ayahsFr.find((a) => a.numberInSurah === numberInSurah)?.text ?? "";

  const playSurahFull = () => {
    if (selectedSurah == null) return;
    if (playingSurah && surahAudioRef.current) {
      surahAudioRef.current.pause();
      surahAudioRef.current = null;
      setPlayingSurah(false);
      return;
    }
    const audio = new Audio(`${AUDIO_BASE}/${selectedSurah}.mp3`);
    surahAudioRef.current = audio;
    audio.onended = () => {
      setPlayingSurah(false);
      surahAudioRef.current = null;
    };
    audio.onerror = () => {
      setPlayingSurah(false);
      surahAudioRef.current = null;
    };
    setPlayingSurah(true);
    audio.play();
  };

  const playVerse = (surahNum: number, verseNum: number) => {
    const key = `${surahNum}-${verseNum}`;
    if (playingVerse === key) {
      setPlayingVerse(null);
      return;
    }
    setPlayingVerse(key);
    const audio = new Audio(
      `${AUDIO_BASE}/${surahNum}/${verseNum}.mp3`
    );
    audio.onended = () => setPlayingVerse(null);
    audio.onerror = () => setPlayingVerse(null);
    audio.play();
  };

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
            <h1 className="text-xl md:text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              Coran
            </h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-3xl">
        {selectedSurah == null ? (
          <>
            {loadingList ? (
              <div className="flex justify-center py-12">
                <Loader2 className="h-10 w-10 animate-spin text-primary" />
              </div>
            ) : (
              <div className="grid gap-2">
                {surahs.map((s) => (
                  <button
                    key={s.number}
                    type="button"
                    onClick={() => setSelectedSurah(s.number)}
                    className={cn(
                      "flex items-center justify-between w-full text-left",
                      "rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm",
                      "px-4 py-3 hover:bg-primary/10 hover:border-primary/30 transition-colors"
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20 text-primary text-sm font-bold">
                        {s.number}
                      </span>
                      <span className="font-medium text-foreground">
                        {s.englishNameTranslation}
                      </span>
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {s.numberOfAyahs} versets
                    </span>
                  </button>
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            <div className="flex items-center gap-3 mb-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedSurah(null)}
              >
                ← Liste des sourates
              </Button>
            </div>
            {loadingSurah ? (
              <div className="flex justify-center py-12">
                <Loader2 className="h-10 w-10 animate-spin text-primary" />
              </div>
            ) : (
              <div className="space-y-6">
                {surahAr && (
                  <Card className="p-4 bg-muted/30">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h2 className="text-lg font-semibold text-foreground mb-1">
                          {surahAr.englishName}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          {surahAr.numberOfAyahs} versets
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2"
                        onClick={playSurahFull}
                      >
                        <Volume2 className={cn("h-4 w-4", playingSurah && "animate-pulse")} />
                        {playingSurah ? "Pause" : "Écouter la sourate"}
                      </Button>
                    </div>
                  </Card>
                )}
                <div className="space-y-4">
                  {ayahsAr.map((ayah) => (
                    <Card
                      key={ayah.number}
                      className="p-4 bg-card/80 backdrop-blur-sm"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary text-xs font-bold">
                          {ayah.numberInSurah}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p
                            className="text-lg leading-loose font-arabic text-right text-foreground mb-2"
                            dir="rtl"
                          >
                            {ayah.text.trim()}
                          </p>
                          {getFrText(ayah.numberInSurah) && (
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {getFrText(ayah.numberInSurah)}
                            </p>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="shrink-0 h-9 w-9"
                          onClick={() =>
                            playVerse(selectedSurah!, ayah.numberInSurah)
                          }
                          title="Écouter le verset"
                        >
                          <Volume2
                            className={cn(
                              "h-4 w-4",
                              playingVerse ===
                                `${selectedSurah}-${ayah.numberInSurah}` &&
                                "text-primary animate-pulse"
                            )}
                          />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
