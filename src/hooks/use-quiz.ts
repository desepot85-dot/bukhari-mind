import { useMemo } from "react";
import { useHadiths } from "@/hooks/use-hadiths";
import { bukhariBooks } from "@/data/bukhari-books";
import type { Hadith } from "@/data/bukhari-hadiths";

/** Thèmes du quiz (au moins 400 variantes avec types de questions × thèmes) */
export const QUIZ_THEMES = [
  { id: "comportement", label: "Comportement", categories: ["Comportement"] },
  { id: "priere", label: "Prière", categories: ["Purification & Prière", "Prières Spéciales"] },
  { id: "foi", label: "Foi", categories: ["Foi & Révélation", "Croyance"] },
  { id: "commerce", label: "Commerce", categories: ["Commerce", "Finances"] },
  { id: "famille", label: "Famille", categories: ["Famille"] },
] as const;

export type QuizThemeId = (typeof QUIZ_THEMES)[number]["id"];

export type QuestionType = "narrator" | "lesson" | "book";

export interface QuizItem {
  hadith: Hadith;
  questionType: QuestionType;
  questionText: string;
  choices: string[];
  correctIndex: number;
}

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function pickDistractors<T>(
  pool: T[],
  correct: T,
  count: number,
  equal: (a: T, b: T) => boolean
): T[] {
  const others = pool.filter((x) => !equal(x, correct));
  const shuffled = shuffle(others);
  return shuffled.slice(0, count);
}

/** Filtre les hadiths par thèmes sélectionnés (ids) */
export function filterHadithsByThemes(
  hadiths: Hadith[],
  themeIds: QuizThemeId[]
): Hadith[] {
  if (themeIds.length === 0) return hadiths;
  const categories = new Set(
    QUIZ_THEMES.filter((t) => themeIds.includes(t.id)).flatMap((t) => t.categories)
  );
  return hadiths.filter((h) => {
    const book = bukhariBooks.find((b) => b.id === h.bookId);
    return book && categories.has(book.category);
  });
}

/** Construit une liste de questions de quiz à partir d'hadiths filtrés */
export function buildQuizItems(
  hadiths: Hadith[],
  count: number
): QuizItem[] {
  if (hadiths.length === 0) return [];

  const types: QuestionType[] = ["narrator", "lesson", "book"];
  const narrators = [...new Set(hadiths.map((h) => h.narrator.trim()).filter(Boolean))];
  const lessons = [...new Set(hadiths.map((h) => h.titleFr.trim()).filter(Boolean))];
  const bookIds = [...new Set(hadiths.map((h) => h.bookId))];
  const bookTitles = bookIds
    .map((id) => bukhariBooks.find((b) => b.id === id)?.titleFr)
    .filter((t): t is string => Boolean(t));

  const sample = shuffle(hadiths).slice(0, Math.min(count, hadiths.length));
  const items: QuizItem[] = [];

  for (const hadith of sample) {
    const type = types[Math.floor(Math.random() * types.length)];
    const book = bukhariBooks.find((b) => b.id === hadith.bookId);
    let correct: string;
    let pool: string[];

    if (type === "narrator") {
      correct = hadith.narrator.trim();
      pool = narrators;
    } else if (type === "lesson") {
      correct = hadith.titleFr.trim();
      pool = lessons;
    } else {
      correct = book?.titleFr ?? "";
      pool = bookTitles;
    }

    if (!correct || pool.length < 4) continue;

    const distractors = pickDistractors(
      pool,
      correct,
      3,
      (a, b) => a === b
    );
    const choices = shuffle([correct, ...distractors]);
    const correctIndex = choices.indexOf(correct);

    const questionText =
      type === "narrator"
        ? "Qui est le narrateur de ce hadith ?"
        : type === "lesson"
          ? "Quelle leçon ou thème illustre ce hadith ?"
          : "Dans quel livre de Sahih al-Bukhari ce hadith se trouve-t-il ?";

    items.push({
      hadith,
      questionType: type,
      questionText,
      choices,
      correctIndex,
    });
  }

  return items;
}

/** Hook : hadiths chargés + hadiths filtrés par thèmes (pour le quiz) */
export function useQuizHadiths(themeIds: QuizThemeId[]) {
  const { data: hadiths = [], isLoading, error } = useHadiths();
  const filtered = useMemo(
    () => filterHadithsByThemes(hadiths, themeIds),
    [hadiths, themeIds]
  );
  return { hadiths: filtered, allHadiths: hadiths, isLoading, error };
}
