import { useParams, Link, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Search, Loader2 } from "lucide-react";
import { bukhariBooks } from "@/data/bukhari-books";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import { useBookHadiths } from "@/hooks/use-hadiths";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";

const BookDetail = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const hasToastedErrorRef = useRef(false);
  
  const book = bukhariBooks.find(b => b.id === Number(bookId));
  const bookIdNum = Number(bookId) || 1;
  const hadithStart = book?.hadithStart || 1;
  const hadithEnd = book?.hadithEnd || 7;
  
  // Charger les hadiths par plage sunnah.com (hadithStart-hadithEnd)
  const { data: hadiths = [], isLoading, error } = useBookHadiths(bookIdNum, hadithStart, hadithEnd);

  const filteredHadiths = hadiths.filter(hadith => 
    hadith.titleFr.toLowerCase().includes(searchQuery.toLowerCase()) ||
    hadith.titleAr.includes(searchQuery) ||
    hadith.textFr.toLowerCase().includes(searchQuery.toLowerCase()) ||
    hadith.textAr.includes(searchQuery)
  );

  // Afficher un toast UNE seule fois (évite les boucles de rendu / écran blanc)
  useEffect(() => {
    if (!error) {
      hasToastedErrorRef.current = false;
      return;
    }

    if (hasToastedErrorRef.current) return;
    hasToastedErrorRef.current = true;

    toast({
      title: "Erreur",
      description: "Impossible de charger les hadiths. Veuillez réessayer.",
      variant: "destructive",
    });
  }, [error, toast]);

  if (!book) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
          <h1 className="text-2xl font-bold text-foreground mb-2">Livre non trouvé</h1>
          <p className="text-muted-foreground mb-6">Ce livre n'existe pas dans notre collection.</p>
          <Button onClick={() => navigate("/library")} variant="default">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à la bibliothèque
          </Button>
        </div>
      </div>
    );
  }
  
  // Afficher le loader pendant le chargement
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-16 w-16 text-primary mx-auto mb-4 animate-spin" />
          <h2 className="text-xl font-semibold text-foreground">Chargement des hadiths...</h2>
          <p className="text-muted-foreground mt-2">Récupération depuis la base de données authentique</p>
        </div>
      </div>
    );
  }

  // Afficher un écran d'erreur stable (au lieu de continuer avec un toast en boucle)
  if (error) {
    const message = error instanceof Error ? error.message : "Erreur inconnue";

    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-xl px-4">
          <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
          <h1 className="text-2xl font-bold text-foreground mb-2">Chargement indisponible</h1>
          <p className="text-muted-foreground mb-6">
            L’API externe a refusé la requête (401) ou est momentanément indisponible.
          </p>
          <p className="text-sm text-muted-foreground mb-6 break-words">{message}</p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Button
              variant="default"
              onClick={() => queryClient.invalidateQueries({ queryKey: ["book-hadiths", bookIdNum] })}
            >
              Réessayer
            </Button>
            <Button variant="outline" onClick={() => navigate("/library")}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à la bibliothèque
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border/50 shadow-elegant">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Link to="/library">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Bibliothèque
              </Button>
            </Link>
            <Badge variant="outline" className="text-xs">
              Livre {book.id}
            </Badge>
          </div>
          
          <div className="text-center space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed" dir="rtl">
              {book.titleAr}
            </h1>
            <p className="text-lg text-muted-foreground font-medium">
              {book.titleFr}
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Badge variant="secondary">{book.category}</Badge>
              <Badge variant="outline" className="text-xs">
                {hadiths.length} / {book.hadithCount} Hadiths chargés
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Rechercher dans ce livre..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-base shadow-elegant"
            />
          </div>
        </div>

        {/* Hadiths List */}
        {filteredHadiths.length === 0 ? (
          <div className="text-center py-20">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-xl text-muted-foreground mb-2">
              {searchQuery ? "Aucun hadith trouvé" : "Les hadiths de ce livre seront bientôt disponibles"}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              {searchQuery 
                ? "Essayez de modifier votre recherche" 
                : "Nous travaillons à importer la collection complète de Sahih al-Bukhari"}
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredHadiths.map((hadith) => (
              <Card
                key={hadith.id}
                className="p-6 shadow-elegant hover:shadow-premium transition-all duration-300 bg-card border-border/50 hover:border-primary/30"
              >
                <div className="space-y-4">
                  {/* Hadith Number */}
                  <div className="flex items-start justify-between gap-4">
                    <Badge variant="default" className="shrink-0">
                      Hadith {hadith.number}
                    </Badge>
                    <div className="text-xs text-muted-foreground text-right">
                      {hadith.narrator}
                    </div>
                  </div>

                  {/* Arabic Title */}
                  <h3 className="text-xl font-bold text-foreground leading-relaxed" dir="rtl">
                    {hadith.titleAr}
                  </h3>

                  {/* French Title */}
                  <h4 className="text-lg font-semibold text-primary">
                    {hadith.titleFr}
                  </h4>

                  {/* Arabic Text */}
                  <div className="bg-muted/30 p-4 rounded-lg border border-border/30">
                    <p className="text-base leading-loose text-foreground" dir="rtl">
                      {hadith.textAr}
                    </p>
                  </div>

                  {/* French Translation */}
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                    <p className="text-base leading-relaxed text-foreground">
                      {hadith.textFr}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetail;
