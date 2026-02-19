import ReactMarkdown from "react-markdown";
import { Brain, Lightbulb } from "lucide-react";

interface DeepAnalysisProps {
  analysis: string;
  deepAnalysis: string;
  relatedTopics: string[];
  totalFound: number;
  onRelatedClick: (topic: string) => void;
}

const DeepAnalysis = ({
  analysis,
  deepAnalysis,
  relatedTopics,
  totalFound,
  onRelatedClick,
}: DeepAnalysisProps) => {
  return (
    <div className="space-y-4">
      {/* Quick analysis */}
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
        <div className="flex items-center gap-2 mb-2">
          <Brain className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-foreground">
            Analyse — {totalFound} hadith{totalFound > 1 ? "s" : ""} trouvé{totalFound > 1 ? "s" : ""}
          </h3>
        </div>
        <p className="text-sm text-muted-foreground">{analysis}</p>
      </div>

      {/* Deep analysis */}
      {deepAnalysis && (
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="h-4 w-4 text-accent" />
            <h3 className="text-sm font-semibold text-foreground">Analyse approfondie</h3>
          </div>
          <div className="prose prose-sm dark:prose-invert max-w-none prose-p:my-2 prose-headings:my-2">
            <ReactMarkdown>{deepAnalysis}</ReactMarkdown>
          </div>
        </div>
      )}

      {/* Related topics */}
      {relatedTopics?.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground">Sujets connexes :</span>
          {relatedTopics.map((topic, i) => (
            <button
              key={i}
              onClick={() => onRelatedClick(topic)}
              className="rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:scale-105 active:scale-95"
            >
              {topic}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DeepAnalysis;
