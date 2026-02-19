import { AlertTriangle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/50">
      <div className="container mx-auto px-4">
        {/* Warning Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 shadow-elegant">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-foreground">
                  ⚠️ Avertissement Important
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Bien que notre IA soit entraînée sur des sources authentiques, elle est un outil technologique 
                  et peut occasionnellement commettre des erreurs. Les réponses générées ne remplacent en aucun 
                  cas l'avis d'un savant qualifié ('alim) ou d'un érudit en Islam. Veuillez toujours vous référer 
                  et vous baser sur les sources traditionnelles ou consulter un expert pour toute question de 
                  jurisprudence ou de doctrine.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              Al-Bukhari Intelligent
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transformez votre étude de la Sunnah avec l'Intelligence Artificielle et l'authenticité de Sahih al-Bukhari
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-smooth">
              Conditions d'utilisation
            </a>
            <a href="#" className="hover:text-primary transition-smooth">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-primary transition-smooth">
              Contact
            </a>
            <a href="#" className="hover:text-primary transition-smooth">
              FAQ
            </a>
          </div>

          <div className="pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              © 2025 Bukhari AI. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
