/**
 * Message à la Communauté : un conseil par jour (généré par date).
 */
export const COMMUNITY_MESSAGES = [
  "La générosité envers les autres est une des plus belles formes d'adoration.",
  "La patience dans l'épreuve rapproche d'Allah et élève le rang.",
  "Un sourire envers ton frère est une aumône.",
  "Les bonnes paroles sont une aumône.",
  "Visiter un malade, nourrir un affamé : des actes qui pèsent lourd dans la balance.",
  "Pardonne à autrui comme tu aimerais qu'Allah te pardonne.",
  "La sincérité dans l'intention rend chaque acte une adoration.",
  "Prends soin de ta famille : c'est une obligation et un mérite.",
  "Remercier Allah en toute circonstance est la clé du cœur serein.",
  "L'honnêteté en commerce préserve la bénédiction.",
  "Éviter la médisance protège ta foi et ton honneur.",
  "La modestie est une parure pour le croyant.",
  "Conseiller en bien et interdire le blâmable, avec douceur.",
  "Honorer ses parents ouvre les portes du Paradis.",
  "L'entraide et la solidarité renforcent la communauté.",
  "La gratitude attire davantage de bienfaits.",
  "Apprendre et enseigner le bien est une œuvre qui perdure.",
  "La constance dans les petites œuvres vaut mieux que l'effort rare.",
  "Prendre soin de l'orphelin et du nécessiteux rapproche du Prophète.",
  "La vérité, même si elle est amère, libère.",
  "Éloigne-toi du gaspillage et du superflu.",
  "La douceur dans le discours adoucit les cœurs.",
  "Prier à l'heure et en communauté est une grande récompense.",
  "Invoquer Allah par Ses plus beaux noms.",
  "Lire le Coran chaque jour illumine la poitrine.",
  "Faire l'aumône en secret apaise le cœur.",
  "Respecter les engagements est une marque de foi.",
  "La bienveillance envers les voisins fait partie de la foi.",
  "Demander le savoir et le mettre en pratique.",
  "Se rappeler la mort pour donner du prix à chaque instant.",
];

export function getMessageOfDay(date?: Date): string {
  const d = date ?? new Date();
  const y = d.getFullYear();
  const m = d.getMonth() + 1;
  const day = d.getDate();
  const seed = y * 10000 + m * 100 + day;
  const index = Math.abs(seed) % COMMUNITY_MESSAGES.length;
  return COMMUNITY_MESSAGES[index] ?? COMMUNITY_MESSAGES[0];
}

const API_BASE = "https://api.alquran.cloud/v1";
const FR_EDITION = "fr.hamidullah";

export interface VerseOfDayResult {
  surahNumber: number;
  surahName: string;
  verseNumber: number;
  textAr: string;
  textFr: string;
}

/**
 * Récupère un verset déterminé par la date (même verset pour tous chaque jour).
 */
export async function fetchVerseOfDay(date?: Date): Promise<VerseOfDayResult | null> {
  const d = date ?? new Date();
  const y = d.getFullYear();
  const m = d.getMonth() + 1;
  const day = d.getDate();
  const seed = y * 10000 + m * 100 + day;

  try {
    const listRes = await fetch(`${API_BASE}/surah`);
    const listData = await listRes.json();
    if (listData.code !== 200 || !listData.data?.length) return null;

    const surahs = listData.data as { number: number; numberOfAyahs: number; englishName: string }[];
    const surahIndex = Math.abs(seed) % surahs.length;
    const surah = surahs[surahIndex];
    if (!surah || surah.numberOfAyahs < 1) return null;

    const verseIndexInSurah = Math.abs((seed >> 10) % surah.numberOfAyahs);
    const verseNumberInSurah = verseIndexInSurah + 1;

    const [arRes, frRes] = await Promise.all([
      fetch(`${API_BASE}/surah/${surah.number}`),
      fetch(`${API_BASE}/surah/${surah.number}/${FR_EDITION}`),
    ]);
    const arData = await arRes.json();
    const frData = await frRes.json();
    if (arData.code !== 200 || !arData.data?.ayahs) return null;

    const ayahsAr = arData.data.ayahs as { numberInSurah: number; text: string }[];
    const ayahsFr = frData?.code === 200 && frData?.data?.ayahs
      ? (frData.data.ayahs as { numberInSurah: number; text: string }[])
      : [];
    const ayahAr = ayahsAr.find((a) => a.numberInSurah === verseNumberInSurah);
    const ayahFr = ayahsFr.find((a) => a.numberInSurah === verseNumberInSurah);

    return {
      surahNumber: surah.number,
      surahName: surah.englishName,
      verseNumber: verseNumberInSurah,
      textAr: ayahAr?.text?.trim() ?? "",
      textFr: ayahFr?.text?.trim() ?? "",
    };
  } catch {
    return null;
  }
}
