import { useQuery } from '@tanstack/react-query';
import { Hadith } from '@/data/bukhari-hadiths';
import { supabase } from '@/integrations/supabase/client';
import { bukhariLocalHadiths } from '@/data/bukhari-local-hadiths';

interface ImportHadithsResponse {
  success: boolean;
  metadata: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    sections: Array<{
      id: number;
      titleFr: string;
      titleEn: string;
    }>;
  };
  hadiths: Hadith[];
  error?: string;
}

export const useHadiths = (bookId?: number) => {
  return useQuery({
    queryKey: ['hadiths', bookId],
    queryFn: async (): Promise<Hadith[]> => {
      try {
        const params: Record<string, string> = {
          limit: '10000',
          page: '1'
        };
        
        if (bookId) {
          params.bookId = bookId.toString();
        }

        const queryString = new URLSearchParams(params).toString();
        const response = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/import-hadiths?${queryString}`,
          {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
          }
        );

        if (!response.ok) {
          throw new Error(`API returned ${response.status}`);
        }

        const result: ImportHadithsResponse = await response.json();

        if (result.success && result.hadiths && result.hadiths.length > 0) {
          console.log(`✅ Loaded ${result.hadiths.length} hadiths from API`);
          return result.hadiths;
        }

        throw new Error('No hadiths returned from API');

      } catch (err) {
        console.warn('API failed, using local hadiths:', err);
        if (bookId) {
          return bukhariLocalHadiths.filter(h => h.bookId === bookId);
        }
        return bukhariLocalHadiths;
      }
    },
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24,
  });
};

// Hook pour récupérer les hadiths d'un livre par plage sunnah.com (hadithStart-hadithEnd)
export const useBookHadiths = (bookId: number, hadithStart: number, hadithEnd: number) => {
  return useQuery({
    queryKey: ['book-hadiths', bookId, hadithStart, hadithEnd],
    queryFn: async (): Promise<Hadith[]> => {
      try {
        const params = new URLSearchParams({
          hadithStart: hadithStart.toString(),
          hadithEnd: hadithEnd.toString(),
          sunnahBookId: bookId.toString(),
          limit: '10000',
          page: '1'
        });

        const response = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/import-hadiths?${params}`,
          {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
          }
        );

        if (!response.ok) {
          throw new Error(`API returned ${response.status}`);
        }

        const result: ImportHadithsResponse = await response.json();

        if (result.success && result.hadiths && result.hadiths.length > 0) {
          console.log(`✅ Loaded ${result.hadiths.length} hadiths for book ${bookId} (range ${hadithStart}-${hadithEnd})`);
          return result.hadiths;
        }

        throw new Error('No hadiths returned');

      } catch (err) {
        console.warn(`API failed for book ${bookId}, using local hadiths:`, err);
        return bukhariLocalHadiths.filter(h => h.id >= hadithStart && h.id <= hadithEnd);
      }
    },
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24,
  });
};

/**
 * Sélectionne un hadith de façon déterministe à partir de la date (même hadith pour tous toute la journée).
 * Utilise la date au format AAAA-MM-JJ pour calculer un index stable.
 */
export function getHadithOfDay(hadiths: Hadith[], date?: Date): Hadith | null {
  if (!hadiths?.length) return null;
  const d = date ?? new Date();
  const y = d.getFullYear();
  const m = d.getMonth() + 1;
  const day = d.getDate();
  const seed = y * 10000 + m * 100 + day;
  const index = Math.abs(seed) % hadiths.length;
  return hadiths[index] ?? null;
}

/** Hook : hadith du jour (récupère les hadiths puis applique getHadithOfDay). */
export function useHadithOfDay() {
  const { data: hadiths = [], isLoading, error } = useHadiths();
  const hadithOfDay = hadiths.length > 0 ? getHadithOfDay(hadiths) : null;
  return { hadithOfDay, isLoading, error };
}

// Hook pour récupérer les métadonnées
export const useHadithsMetadata = () => {
  return useQuery({
    queryKey: ['hadiths-metadata'],
    queryFn: async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/import-hadiths?limit=1`,
          {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
          }
        );

        if (!response.ok) {
          throw new Error(`API returned ${response.status}`);
        }

        const result: ImportHadithsResponse = await response.json();

        return {
          total: result.metadata.total,
          sections: result.metadata.sections
        };

      } catch (err) {
        console.warn('Failed to fetch metadata:', err);
        return {
          total: bukhariLocalHadiths.length,
          sections: []
        };
      }
    },
    staleTime: 1000 * 60 * 60 * 24,
  });
};
