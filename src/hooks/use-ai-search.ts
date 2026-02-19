import { useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface SearchResult {
  hadithNumber: number;
  bookId: number;
  bookName: string;
  relevance: "high" | "medium" | "low";
  textAr: string;
  textFr: string;
  /** Texte en anglais (optionnel, fallback sur textFr si absent) */
  textEn?: string;
  /** Texte en hausa (optionnel, fallback sur textFr si absent) */
  textHa?: string;
  explanation: string;
  narrator: string;
  themes: string[];
}

export interface SearchResponse {
  analysis: string;
  results: SearchResult[];
  deepAnalysis: string;
  relatedTopics: string[];
  totalFound: number;
}

export function useAiSearch() {
  const [results, setResults] = useState<SearchResponse | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = useCallback(async (query: string) => {
    if (!query.trim() || isSearching) return;

    setIsSearching(true);
    setError(null);
    setResults(null);

    try {
      const { data, error: fnError } = await supabase.functions.invoke("ai-search", {
        body: { query: query.trim() },
      });

      if (fnError) throw fnError;

      if (data?.error) {
        setError(data.error);
        return;
      }

      setResults(data as SearchResponse);
    } catch (err) {
      console.error("AI Search error:", err);
      setError("Une erreur est survenue lors de la recherche. Veuillez réessayer.");
    } finally {
      setIsSearching(false);
    }
  }, [isSearching]);

  const clearResults = useCallback(() => {
    setResults(null);
    setError(null);
  }, []);

  return { results, isSearching, error, search, clearResults };
}
