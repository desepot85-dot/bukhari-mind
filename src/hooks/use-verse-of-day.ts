import { useQuery } from "@tanstack/react-query";
import { fetchVerseOfDay } from "@/lib/daily-content";

export function useVerseOfDay(date?: Date) {
  const d = date ?? new Date();
  const dateKey = d.toISOString().slice(0, 10);
  return useQuery({
    queryKey: ["verse-of-day", dateKey],
    queryFn: () => fetchVerseOfDay(d),
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24,
  });
}
