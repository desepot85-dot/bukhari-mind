import { Card } from "@/components/ui/card";
import { Check, Globe, BookMarked, Wifi } from "lucide-react";

const Authenticity = () => {
  const benefits = [
    {
      icon: Check,
      title: "Collection Complète GARANTIE",
      description: "Accès aux 97 livres et à l'intégralité des plus de 7500 Hadiths de Sahih al-Bukhari. L'IA ne laisse aucune partie du recueil inexplorée.",
    },
    {
      icon: Globe,
      title: "Multilingue",
      description: "Hadiths présentés en Arabe original, traduits en Français (et Anglais/autres langues clés).",
    },
    {
      icon: BookMarked,
      title: "Mode Lecture Avancé",
      description: "Sauvegardez, organisez, partagez facilement le texte et les chaînes de narration (Isnad).",
    },
    {
      icon: Wifi,
      title: "Fonctionne Hors Ligne",
      description: "Lisez tout le recueil sans connexion Internet après le premier téléchargement.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold md:text-5xl">
            Plus que l'IA, l'{" "}
            <span className="gradient-primary bg-clip-text text-transparent">Authenticité</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Le pont entre la tradition millénaire et la technologie moderne
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 shadow-elegant hover:shadow-glow transition-smooth border-border/50 bg-card">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shadow-elegant">
                  <benefit.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Authenticity;
