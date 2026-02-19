import { Button } from "@/components/ui/button";
import { Sparkles, MessageCircle, Search, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-4xl space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-2 text-sm font-medium text-primary shadow-elegant">
            <Sparkles className="h-4 w-4" />
            Propulsé par l'Intelligence Artificielle
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Al-Bukhari <span className="gradient-primary bg-clip-text text-transparent">Intelligent</span>
          </h1>

          <p className="text-xl text-muted-foreground md:text-2xl lg:text-3xl font-semibold">
            Votre Compagnon IA pour le Hadith Authentique
          </p>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            La collection complète de Sahih al-Bukhari. Posez une question. Obtenez une réponse. 
            Vérifié par l'Intelligence Artificielle.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center pt-6">
            <Link to="/search">
              <Button variant="hero" size="xl" className="group">
                <Search className="mr-2 h-5 w-5" />
                Recherche Intelligente
                <Sparkles className="ml-2 h-5 w-5 transition-transform group-hover:rotate-12" />
              </Button>
            </Link>
            <Link to="/chat">
              <Button variant="premium" size="xl" className="group">
                <MessageCircle className="mr-2 h-5 w-5" />
                Discuter avec l'IA
              </Button>
            </Link>
            <Link to="/quiz">
              <Button variant="outline" size="xl" className="group">
                <Trophy className="mr-2 h-5 w-5" />
                Quiz Hadiths
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">97</div>
              <div className="text-sm text-muted-foreground">Livres</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">7563</div>
              <div className="text-sm text-muted-foreground">Hadiths</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-accent bg-clip-text text-transparent">100%</div>
              <div className="text-sm text-muted-foreground">Authentique</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
