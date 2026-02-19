import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, Shield, TrendingUp } from "lucide-react";
import aiAssistant from "@/assets/ai-assistant.png";
import authenticity from "@/assets/authenticity.png";
import analysis from "@/assets/analysis.png";

const Features = () => {
  const features = [
    {
      icon: Search,
      image: aiAssistant,
      title: "Assistant de Recherche en Langage Naturel",
      description: "Posez n'importe quelle question sur la vie quotidienne ou la jurisprudence (Fiqh). Notre IA analyse le sens profond et vous fournit la réponse précise en citant le(s) Hadith(s) de Sahih al-Bukhari.",
      premium: true,
    },
    {
      icon: BookOpen,
      image: analysis,
      title: "Analyse Contextuelle",
      description: "Obtenez une synthèse générée par l'IA expliquant le contexte historique ou théologique d'un Hadith complexe, basée sur les commentaires reconnus (comme le Fath al-Bari).",
      premium: true,
    },
    {
      icon: Shield,
      image: authenticity,
      title: "Vérification de Citation Instantanée",
      description: "Vous voyez une citation sur les réseaux sociaux ? Collez-la dans l'application. Notre IA confirmera en quelques secondes si elle correspond exactement à un Hadith de Sahih al-Bukhari.",
      premium: true,
    },
    {
      icon: TrendingUp,
      image: aiAssistant,
      title: "Hadith du Jour Personnalisé",
      description: "Recevez chaque matin un Hadith pertinent, ciblé selon vos domaines d'intérêt (pureté, finance, famille, etc.) pour commencer votre journée avec une réflexion authentique.",
      premium: false,
    },
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold md:text-5xl">
            Fonctionnalités Uniques{" "}
            <span className="gradient-primary bg-clip-text text-transparent">Propulsées par l'IA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Notre IA a été entraînée sur le Sahih al-Bukhari dans son intégralité
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden p-8 shadow-elegant hover:shadow-glow transition-smooth border-border/50 bg-card">
              {feature.premium && (
                <Badge className="absolute top-4 right-4 gradient-accent border-0 shadow-premium">
                  💎 Premium
                </Badge>
              )}
              
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center shadow-elegant">
                    <img src={feature.image} alt={feature.title} className="w-16 h-16 object-contain" />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
