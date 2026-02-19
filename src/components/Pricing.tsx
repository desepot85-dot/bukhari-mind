import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold md:text-5xl">
            Modèle d'{" "}
            <span className="gradient-accent bg-clip-text text-transparent">Abonnement</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            L'accès au texte intégral est GRATUIT
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Free Plan */}
          <Card className="p-8 shadow-elegant border-border/50 bg-card">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Gratuit</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold gradient-primary bg-clip-text text-transparent">0€</span>
                  <span className="text-muted-foreground">/mois</span>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Accès complet aux 7500+ Hadiths</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">97 livres de Sahih al-Bukhari</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Mode lecture et sauvegarde</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Fonctionne hors ligne</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Hadith du jour</span>
                </li>
              </ul>

              <Link to="/library" className="w-full">
                <Button variant="outline" size="lg" className="w-full">
                  Commencer Gratuitement
                </Button>
              </Link>
            </div>
          </Card>

          {/* Premium Plan */}
          <Card className="p-8 shadow-premium border-accent/30 bg-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 gradient-accent opacity-10 blur-3xl rounded-full" />
            
            <div className="space-y-6 relative">
              <div>
                <div className="inline-block px-3 py-1 rounded-full gradient-accent text-accent-foreground text-sm font-semibold mb-2">
                  💎 Populaire
                </div>
                <h3 className="text-2xl font-bold mb-2">Premium</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold gradient-accent bg-clip-text text-transparent">4,99€</span>
                  <span className="text-muted-foreground">/mois</span>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground font-medium">Tout du plan Gratuit, plus :</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Assistant IA en langage naturel</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Analyse contextuelle avancée</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Vérification de citation instantanée</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Suggestions personnalisées</span>
                </li>
              </ul>

              <Button variant="premium" size="lg" className="w-full">
                Débloquer Premium
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
