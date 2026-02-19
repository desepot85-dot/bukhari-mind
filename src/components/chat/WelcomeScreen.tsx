import { Bot, BookOpen, Search, MessageCircle, Star } from "lucide-react";

const suggestions = [
  {
    icon: BookOpen,
    text: "Quel est le premier hadith du Sahih al-Bukhari ?",
  },
  {
    icon: Search,
    text: "Quels hadiths parlent de la prière du vendredi ?",
  },
  {
    icon: MessageCircle,
    text: "Explique-moi l'importance de la chaîne de transmission (isnad)",
  },
  {
    icon: Star,
    text: "Qui est l'Imam al-Bukhari et pourquoi sa collection est-elle spéciale ?",
  },
];

interface WelcomeScreenProps {
  onSuggestionClick: (text: string) => void;
}

const WelcomeScreen = ({ onSuggestionClick }: WelcomeScreenProps) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-12">
      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl gradient-primary shadow-glow">
        <Bot className="h-10 w-10 text-primary-foreground" />
      </div>

      <h2 className="mb-2 text-2xl font-bold text-foreground">
        Assistant Al-Bukhari
      </h2>
      <p className="mb-10 max-w-md text-center text-muted-foreground">
        Posez vos questions sur les hadiths du Sahih al-Bukhari. 
        L'IA vous guide à travers la collection authentique.
      </p>

      <div className="grid w-full max-w-2xl gap-3 sm:grid-cols-2">
        {suggestions.map((suggestion, i) => (
          <button
            key={i}
            onClick={() => onSuggestionClick(suggestion.text)}
            className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-left text-sm transition-all hover:border-primary/30 hover:shadow-elegant hover:scale-[1.02] active:scale-[0.98]"
          >
            <suggestion.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span className="text-foreground">{suggestion.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default WelcomeScreen;
