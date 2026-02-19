import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Trophy,
  Loader2,
  BookOpen,
  Play,
} from "lucide-react";
import {
  useQuizHadiths,
  QUIZ_THEMES,
  buildQuizItems,
  type QuizThemeId,
  type QuizItem,
} from "@/hooks/use-quiz";
import { cn } from "@/lib/utils";

const QUESTIONS_PER_GAME = 10;

const QuizPage = () => {
  const [selectedThemes, setSelectedThemes] = useState<QuizThemeId[]>([]);
  const [phase, setPhase] = useState<"config" | "loading" | "playing" | "finished">("config");
  const [quizItems, setQuizItems] = useState<QuizItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const { hadiths, isLoading: hadithsLoading } = useQuizHadiths(selectedThemes);

  const canStart = selectedThemes.length > 0;

  const startQuiz = () => {
    if (!canStart) return;
    setPhase("loading");
  };

  // Quand on est en "loading", attendre les hadiths puis construire le quiz
  useEffect(() => {
    if (phase !== "loading") return;
    if (hadithsLoading) return;
    if (hadiths.length < 5) {
      setPhase("config");
      return;
    }
    const items = buildQuizItems(hadiths, QUESTIONS_PER_GAME);
    if (items.length > 0) {
      setQuizItems(items);
      setCurrentIndex(0);
      setScore(0);
      setSelectedAnswer(null);
      setHasAnswered(false);
      setPhase("playing");
    } else {
      setPhase("config");
    }
  }, [phase, hadithsLoading, hadiths]);

  const toggleTheme = (id: QuizThemeId) => {
    setSelectedThemes((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const currentItem = quizItems[currentIndex];
  const progress = quizItems.length > 0 ? ((currentIndex + 1) / quizItems.length) * 100 : 0;

  const handleAnswer = (choiceIndex: number) => {
    if (hasAnswered) return;
    setSelectedAnswer(choiceIndex);
    setHasAnswered(true);
    if (choiceIndex === currentItem.correctIndex) {
      setScore((s) => s + 1);
    }
  };

  const goNext = () => {
    if (currentIndex < quizItems.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setHasAnswered(false);
    } else {
      setPhase("finished");
    }
  };

  const resetQuiz = () => {
    setPhase("config");
    setQuizItems([]);
    setSelectedAnswer(null);
    setHasAnswered(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border/50 shadow-elegant">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour
              </Button>
            </Link>
            <h1 className="text-xl md:text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              Quiz Hadiths
            </h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        {phase === "config" && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-2">
              <p className="text-muted-foreground">
                Choisissez un ou plusieurs thèmes. Le quiz tirera aléatoirement des hadiths
                (narrateur, leçon, livre) pour couvrir plus de 400 variantes.
              </p>
            </div>
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Thèmes</h2>
              <div className="flex flex-wrap gap-2">
                {QUIZ_THEMES.map((theme) => (
                  <Badge
                    key={theme.id}
                    variant={selectedThemes.includes(theme.id) ? "default" : "secondary"}
                    className={cn(
                      "cursor-pointer transition-all py-2 px-4 text-sm",
                      selectedThemes.includes(theme.id) && "ring-2 ring-primary"
                    )}
                    onClick={() => toggleTheme(theme.id)}
                  >
                    {theme.label}
                  </Badge>
                ))}
              </div>
            </Card>
            {hadithsLoading && (
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Chargement des hadiths...</span>
              </div>
            )}
            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={startQuiz}
                disabled={!canStart || hadithsLoading}
                className="gap-2"
              >
                <Play className="h-5 w-5" />
                Lancer le quiz
              </Button>
            </div>
          </div>
        )}

        {phase === "loading" && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="h-16 w-16 text-primary animate-spin" />
            <p className="text-muted-foreground">Préparation des questions...</p>
          </div>
        )}

        {phase === "playing" && currentItem && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>
                Question {currentIndex + 1} / {quizItems.length}
              </span>
              <span className="font-medium text-foreground">Score : {score}</span>
            </div>
            <Progress value={progress} className="h-2" />
            <Card className="p-4 bg-muted/30">
              <p className="text-sm text-foreground/90 leading-relaxed line-clamp-4">
                « {currentItem.hadith.textFr.slice(0, 400)}
                {currentItem.hadith.textFr.length > 400 ? "…" : ""} »
              </p>
            </Card>
            <p className="font-medium text-foreground">{currentItem.questionText}</p>
            <div className="grid gap-2">
              {currentItem.choices.map((choice, idx) => {
                const isCorrect = idx === currentItem.correctIndex;
                const isSelected = selectedAnswer === idx;
                const showResult = hasAnswered;
                const isRightChoice = showResult && isCorrect;
                const isWrongChoice = showResult && isSelected && !isCorrect;
                return (
                  <Button
                    key={idx}
                    variant="outline"
                    className={cn(
                      "h-auto py-4 px-4 justify-start text-left font-normal",
                      !showResult && "hover:bg-primary/10 hover:border-primary/40",
                      isRightChoice && "border-green-500 bg-green-500/10 text-green-700 dark:text-green-400",
                      isWrongChoice && "border-red-500 bg-red-500/10 text-red-700 dark:text-red-400"
                    )}
                    onClick={() => handleAnswer(idx)}
                    disabled={hasAnswered}
                  >
                    <span className="flex items-center gap-2">
                      {showResult && isCorrect && (
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />
                      )}
                      {showResult && isWrongChoice && (
                        <XCircle className="h-5 w-5 shrink-0 text-red-600" />
                      )}
                      {choice}
                    </span>
                  </Button>
                );
              })}
            </div>
            {hasAnswered && (
              <div className="flex justify-end pt-2">
                <Button onClick={goNext} className="gap-2">
                  {currentIndex < quizItems.length - 1 ? "Question suivante" : "Voir le résultat"}
                </Button>
              </div>
            )}
          </div>
        )}

        {phase === "finished" && (
          <Card className="p-8 text-center space-y-6 animate-fade-in">
            <Trophy className="h-16 w-16 text-primary mx-auto" />
            <h2 className="text-2xl font-bold">Quiz terminé</h2>
            <p className="text-4xl font-bold gradient-primary bg-clip-text text-transparent">
              {score} / {quizItems.length}
            </p>
            <p className="text-muted-foreground">
              {score === quizItems.length
                ? "Parfait !"
                : score >= quizItems.length / 2
                  ? "Bien joué."
                  : "Continuez à réviser les hadiths."}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button onClick={resetQuiz} variant="outline" className="gap-2">
                <BookOpen className="h-4 w-4" />
                Nouveau quiz
              </Button>
              <Link to="/library">
                <Button className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Bibliothèque
                </Button>
              </Link>
            </div>
          </Card>
        )}
      </main>
    </div>
  );
};

export default QuizPage;
