import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search as SearchIcon, X, Loader2, Sparkles, Mic, MicOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAiSearch } from "@/hooks/use-ai-search";
import SearchResultCard from "@/components/search/SearchResultCard";
import DeepAnalysis from "@/components/search/DeepAnalysis";
import { toast } from "sonner";

const suggestions = [
  "Quels hadiths parlent de la patience ?",
  "Les hadiths sur le jeûne du lundi et jeudi",
  "Que dit le Prophète ﷺ sur la miséricorde ?",
  "Les hadiths sur les droits des voisins",
  "L'importance de la prière de l'aube (Fajr)",
  "Les hadiths sur l'éducation des enfants",
];

const Search = () => {
  const { results, isSearching, error, search, clearResults } = useAiSearch();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const searchRef = useRef(search);

  // Mettre à jour la ref lorsque search change
  useEffect(() => {
    searchRef.current = search;
  }, [search]);

  useEffect(() => {
    inputRef.current?.focus();
    
    // Initialiser la reconnaissance vocale si disponible
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'fr-FR';
      
      recognition.onstart = () => {
        setIsListening(true);
        toast.info("Écoute en cours... Parlez maintenant.");
      };
      
      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results[0][0].transcript;
        setQuery(transcript);
        setIsListening(false);
        toast.success("Recherche dictée avec succès");
        // Lancer automatiquement la recherche en utilisant la ref
        searchRef.current(transcript);
      };
      
      recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
        console.error('Erreur de reconnaissance vocale:', event.error);
        setIsListening(false);
        if (event.error === 'no-speech') {
          toast.error("Aucune parole détectée. Veuillez réessayer.");
        } else if (event.error === 'not-allowed') {
          toast.error("Permission microphone refusée. Veuillez autoriser l'accès au microphone.");
        } else {
          toast.error("Erreur de reconnaissance vocale. Veuillez réessayer.");
        }
      };
      
      recognition.onend = () => {
        setIsListening(false);
      };
      
      recognitionRef.current = recognition;
    }
    
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) search(query);
  };

  const handleSuggestion = (text: string) => {
    setQuery(text);
    search(text);
  };

  const handleRelatedClick = (topic: string) => {
    setQuery(topic);
    search(topic);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleListening = () => {
    if (!recognitionRef.current) {
      toast.error("La reconnaissance vocale n'est pas disponible dans votre navigateur.");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current.start();
      } catch (error) {
        console.error('Erreur lors du démarrage de la reconnaissance:', error);
        toast.error("Impossible de démarrer la reconnaissance vocale.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl flex items-center gap-3 px-4 py-3">
          <Link to="/">
            <Button variant="ghost" size="icon" className="rounded-xl shrink-0">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>

          <form onSubmit={handleSubmit} className="flex-1 flex items-center gap-2">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Recherche en langage naturel dans les hadiths..."
                className="w-full rounded-xl border border-input bg-card pl-10 pr-20 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                disabled={isSearching || isListening}
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                {query && !isListening && (
                  <button
                    type="button"
                    onClick={() => {
                      setQuery("");
                      clearResults();
                      inputRef.current?.focus();
                    }}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={toggleListening}
                  disabled={isSearching}
                  className={`transition-colors ${
                    isListening
                      ? "text-destructive hover:text-destructive/80"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                  title={isListening ? "Arrêter la dictée" : "Dictée vocale"}
                >
                  {isListening ? (
                    <MicOff className="h-4 w-4 animate-pulse" />
                  ) : (
                    <Mic className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
            <Button
              type="submit"
              disabled={!query.trim() || isSearching}
              size="sm"
              className="rounded-xl gradient-primary shadow-elegant shrink-0"
            >
              {isSearching ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-1" />
                  Chercher
                </>
              )}
            </Button>
          </form>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-6">
        {/* Loading state */}
        {isSearching && (
          <div className="flex flex-col items-center justify-center py-20 gap-4 animate-fade-in">
            <div className="relative">
              <div className="h-16 w-16 rounded-2xl gradient-primary shadow-glow flex items-center justify-center">
                <SearchIcon className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="absolute -inset-2 rounded-3xl border-2 border-primary/20 animate-ping" />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-foreground">Analyse en profondeur...</p>
              <p className="text-xs text-muted-foreground mt-1">L'IA parcourt les 7563 hadiths du Sahih al-Bukhari</p>
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-center">
            <p className="text-sm text-destructive">{error}</p>
          </div>
        )}

        {/* Results */}
        {results && !isSearching && (
          <div className="space-y-6 animate-fade-in">
            {/* Analysis section */}
            <DeepAnalysis
              analysis={results.analysis}
              deepAnalysis={results.deepAnalysis}
              relatedTopics={results.relatedTopics}
              totalFound={results.totalFound}
              onRelatedClick={handleRelatedClick}
            />

            {/* Result cards */}
            {results.results?.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-foreground">
                  Hadiths trouvés
                </h3>
                {results.results.map((result, i) => (
                  <SearchResultCard key={`${result.hadithNumber}-${i}`} result={result} index={i} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Empty state with suggestions */}
        {!results && !isSearching && !error && (
          <div className="flex flex-col items-center py-16 animate-fade-in">
            <div className="h-20 w-20 rounded-2xl gradient-primary shadow-glow flex items-center justify-center mb-6">
              <SearchIcon className="h-10 w-10 text-primary-foreground" />
            </div>
            <h2 className="text-xl font-bold text-foreground mb-2">
              Recherche Intelligente
            </h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-md text-center">
              Posez votre question en langage naturel. L'IA analyse les 7563 hadiths du Sahih al-Bukhari pour trouver les plus pertinents.
            </p>

            <div className="grid w-full max-w-2xl gap-2 sm:grid-cols-2">
              {suggestions.map((text, i) => (
                <button
                  key={i}
                  onClick={() => handleSuggestion(text)}
                  className="flex items-start gap-2 rounded-xl border border-border bg-card p-3 text-left text-sm transition-all hover:border-primary/30 hover:shadow-elegant hover:scale-[1.02] active:scale-[0.98]"
                >
                  <SearchIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                  <span className="text-foreground">{text}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
