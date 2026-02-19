import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { bukhariBooks, categories, TOTAL_HADITHS } from "@/data/bukhari-books";
import { BookOpen, ArrowLeft, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Library = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = bukhariBooks.filter(book => {
    const matchesCategory = !selectedCategory || book.category === selectedCategory;
    const matchesSearch = 
      book.titleFr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.titleAr.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  // Utilise la constante exacte de sunnah.com (7563 hadiths)
  const totalHadiths = TOTAL_HADITHS;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border/50 shadow-elegant">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour
              </Button>
            </Link>
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-bold gradient-primary bg-clip-text text-transparent">
                Sahih al-Bukhari
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                {bukhariBooks.length} Livres • {totalHadiths.toLocaleString()} Hadiths
              </p>
            </div>
            <div className="w-20" /> {/* Spacer for alignment */}
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
              placeholder="Rechercher un livre par titre..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-base shadow-elegant"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-semibold text-foreground">Catégories:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant={!selectedCategory ? "default" : "outline"}
              className="cursor-pointer transition-all hover:scale-105"
              onClick={() => setSelectedCategory(null)}
            >
              Tout ({bukhariBooks.length})
            </Badge>
            {categories.map((category) => {
              const count = bukhariBooks.filter(b => b.category === category).length;
              return (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="cursor-pointer transition-all hover:scale-105"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category} ({count})
                </Badge>
              );
            })}
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <Link key={book.id} to={`/library/${book.id}`}>
              <Card
                className="group p-6 shadow-elegant hover:shadow-premium transition-all duration-300 hover:scale-105 cursor-pointer bg-card border-border/50 hover:border-primary/30"
              >
              <div className="space-y-4">
                {/* Book Icon */}
                <div className="flex items-center justify-center">
                  <div className="w-20 h-20 rounded-lg gradient-primary flex items-center justify-center shadow-glow">
                    <BookOpen className="h-10 w-10 text-white" />
                  </div>
                </div>

                {/* Book Number */}
                <div className="text-center">
                  <Badge variant="outline" className="text-xs">
                    Livre {book.id}
                  </Badge>
                </div>

                {/* Arabic Title */}
                <h3 className="text-lg font-bold text-center text-foreground leading-relaxed" dir="rtl">
                  {book.titleAr}
                </h3>

                {/* French Title */}
                <p className="text-sm text-muted-foreground text-center font-medium">
                  {book.titleFr}
                </p>

                {/* Category */}
                <div className="text-center">
                  <Badge variant="secondary" className="text-xs">
                    {book.category}
                  </Badge>
                </div>

                {/* Hadith Count */}
                <div className="text-center pt-2 border-t border-border/30">
                  <p className="text-xs text-muted-foreground">
                    {book.hadithCount} {book.hadithCount === 1 ? 'Hadith' : 'Hadiths'}
                  </p>
                </div>
              </div>
            </Card>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-20">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-xl text-muted-foreground">Aucun livre trouvé</p>
            <p className="text-sm text-muted-foreground mt-2">
              Essayez de modifier votre recherche ou de sélectionner une autre catégorie
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Library;
