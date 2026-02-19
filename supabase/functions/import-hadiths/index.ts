import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const ARABIC_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-bukhari.min.json";
const ENGLISH_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-bukhari.min.json";

interface ApiHadith {
  hadithnumber: number;
  arabicnumber: number;
  text: string;
  grades: Array<{ name: string; grade: string }>;
  reference: { book: number; hadith: number };
}

interface ApiResponse {
  metadata: {
    name: string;
    sections: Record<string, string>;
    section_details: Record<string, { hadithnumber_first: number; hadithnumber_last: number }>;
  };
  hadiths: ApiHadith[];
}

interface TransformedHadith {
  id: number;
  bookId: number;
  number: string;
  titleAr: string;
  titleFr: string;
  textAr: string;
  textFr: string;
  narrator: string;
}

const sectionTitlesFr: Record<string, string> = {
  "1": "La Révélation", "2": "La Foi", "3": "La Science",
  "4": "Les Ablutions (Wudu')", "5": "Le Bain Rituel (Ghusl)", "6": "Les Menstrues",
  "7": "Les Ablutions Sèches (Tayammum)", "8": "La Prière (Salat)",
  "9": "Les Horaires de Prière", "10": "L'Appel à la Prière (Adhan)",
  "11": "La Prière du Vendredi", "12": "La Prière de la Peur",
  "13": "Les Deux Fêtes (Aïds)", "14": "La Prière du Witr",
  "15": "La Prière pour la Pluie (Istisqa)", "16": "La Prière de l'Éclipse",
  "17": "La Prosternation lors de la Récitation du Coran",
  "18": "Raccourcir les Prières", "19": "La Prière de Nuit (Tahajjud)",
  "20": "Mérites de la Prière à la Mecque et Médine",
  "21": "Les Actions durant la Prière", "22": "L'Oubli dans la Prière",
  "23": "Les Funérailles", "24": "L'Aumône Obligatoire (Zakat)",
  "25": "Le Pèlerinage (Hajj)", "26": "Le Petit Pèlerinage (Omra)",
  "27": "Les Pèlerins Empêchés", "28": "Compensation pour la Chasse",
  "29": "Les Mérites de Médine", "30": "Le Jeûne",
  "31": "Prière de Nuit en Ramadan (Tarawih)", "32": "Les Mérites de la Nuit du Destin",
  "33": "La Retraite Spirituelle (I'tikaf)", "34": "Les Ventes et le Commerce",
  "35": "Les Ventes à Terme (As-Salam)", "36": "Le Droit de Préemption",
  "37": "La Location", "38": "Le Transfert de Dette (Al-Hawala)",
  "39": "La Garantie (Kafalah)", "40": "La Procuration",
  "41": "L'Agriculture", "42": "La Distribution de l'Eau",
  "43": "Les Prêts et Dettes", "44": "Les Litiges",
  "45": "Les Objets Trouvés (Luqata)", "46": "Les Injustices",
  "47": "Les Associations", "48": "Les Gages (Hypothèques)",
  "49": "L'Affranchissement des Esclaves", "50": "Le Contrat d'Affranchissement",
  "51": "Les Dons", "52": "Les Témoignages", "53": "La Réconciliation",
  "54": "Les Conditions", "55": "Les Testaments",
  "56": "Le Jihad (Combat dans la Voie d'Allah)", "57": "Le Cinquième du Butin (Khumus)",
  "58": "La Jizya et les Accords", "59": "Le Début de la Création",
  "60": "Les Prophètes", "61": "Les Mérites du Prophète et de ses Compagnons",
  "62": "Les Compagnons du Prophète", "63": "Les Mérites des Ansar de Médine",
  "64": "Les Expéditions Militaires du Prophète", "65": "L'Exégèse Prophétique du Coran",
  "66": "Les Mérites du Coran", "67": "Le Mariage (Nikah)",
  "68": "Le Divorce", "69": "Les Dépenses Familiales",
  "70": "La Nourriture", "71": "Le Sacrifice de Naissance (Aqiqa)",
  "72": "La Chasse et l'Abattage", "73": "Le Sacrifice de l'Aïd (Adhahi)",
  "74": "Les Boissons", "75": "Les Malades", "76": "La Médecine",
  "77": "Les Vêtements", "78": "Les Bonnes Manières (Adab)",
  "79": "Demander la Permission", "80": "Les Invocations",
  "81": "L'Adoucissement des Cœurs", "82": "Le Destin Divin (Qadar)",
  "83": "Les Serments et Vœux", "84": "Les Expiations de Serments",
  "85": "Les Lois d'Héritage", "86": "Les Peines Légales (Hudud)",
  "87": "Le Prix du Sang (Diyat)", "88": "Les Apostats",
  "89": "Les Déclarations sous Contrainte", "90": "Les Stratagèmes",
  "91": "L'Interprétation des Rêves", "92": "Les Épreuves et la Fin des Temps",
  "93": "Les Jugements (Ahkam)", "94": "Les Souhaits",
  "95": "Accepter l'Information d'une Personne Véridique",
  "96": "S'Attacher au Coran et à la Sunna", "97": "L'Unicité d'Allah (Tawhid)"
};

function extractNarrator(text: string): string {
  const narratorMatch = text.match(/^Narrated\s+([^:]+):/i);
  return narratorMatch ? `D'après ${narratorMatch[1].trim()}` : "Non spécifié";
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '100');
    const bookId = url.searchParams.get('bookId');
    // Nouveau: filtrage par plage de numéros de hadiths (sunnah.com)
    const hadithStart = url.searchParams.get('hadithStart');
    const hadithEnd = url.searchParams.get('hadithEnd');
    // Nouveau: bookId sunnah.com pour le titre
    const sunnahBookId = url.searchParams.get('sunnahBookId');

    console.log(`📖 Fetching page ${page}, limit ${limit}, bookId: ${bookId || 'all'}, range: ${hadithStart || '?'}-${hadithEnd || '?'}`);

    const [arabicResponse, englishResponse] = await Promise.all([
      fetch(ARABIC_URL),
      fetch(ENGLISH_URL)
    ]);

    if (!arabicResponse.ok || !englishResponse.ok) {
      throw new Error(`Failed to fetch data: Arabic=${arabicResponse.status}, English=${englishResponse.status}`);
    }

    const [arabicData, englishData]: [ApiResponse, ApiResponse] = await Promise.all([
      arabicResponse.json(),
      englishResponse.json()
    ]);

    console.log(`✅ Fetched ${arabicData.hadiths.length} Arabic and ${englishData.hadiths.length} English hadiths`);

    const englishMap = new Map<number, ApiHadith>();
    for (const hadith of englishData.hadiths) {
      englishMap.set(hadith.hadithnumber, hadith);
    }

    // Déterminer le bookId sunnah.com pour le titre
    const titleBookId = sunnahBookId || bookId;

    let transformedHadiths: TransformedHadith[] = arabicData.hadiths.map((arabicHadith) => {
      const englishHadith = englishMap.get(arabicHadith.hadithnumber);
      // Utiliser le sunnahBookId pour le titre si fourni, sinon le book de l'API
      const bookNumber = titleBookId ? parseInt(titleBookId) : arabicHadith.reference.book;
      const sectionTitleEn = englishData.metadata.sections[bookNumber.toString()] || "";
      const sectionTitleFr = sectionTitlesFr[bookNumber.toString()] || sectionTitleEn;

      return {
        id: arabicHadith.hadithnumber,
        bookId: bookNumber,
        number: `${arabicHadith.hadithnumber}`,
        titleAr: arabicData.metadata.sections[arabicHadith.reference.book.toString()] || "",
        titleFr: sectionTitlesFr[arabicHadith.reference.book.toString()] || sectionTitleEn,
        textAr: arabicHadith.text,
        textFr: englishHadith?.text || "",
        narrator: englishHadith ? extractNarrator(englishHadith.text) : "Non spécifié"
      };
    });

    // PRIORITÉ: filtrage par plage hadithStart-hadithEnd (méthode exacte sunnah.com)
    if (hadithStart && hadithEnd) {
      const start = parseInt(hadithStart);
      const end = parseInt(hadithEnd);
      transformedHadiths = transformedHadiths.filter(
        h => h.id >= start && h.id <= end
      );
      console.log(`🎯 Filtered by range ${start}-${end}: ${transformedHadiths.length} hadiths`);
    } else if (bookId) {
      // Fallback: filtrage par bookId API (moins précis)
      const bookIdNum = parseInt(bookId);
      transformedHadiths = transformedHadiths.filter(h => h.bookId === bookIdNum);
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedHadiths = transformedHadiths.slice(startIndex, endIndex);

    const response = {
      success: true,
      metadata: {
        total: transformedHadiths.length,
        page,
        limit,
        totalPages: Math.ceil(transformedHadiths.length / limit),
        sections: Object.entries(sectionTitlesFr).map(([id, titleFr]) => ({
          id: parseInt(id),
          titleFr,
          titleEn: englishData.metadata.sections[id] || ""
        }))
      },
      hadiths: paginatedHadiths
    };

    console.log(`📤 Returning ${paginatedHadiths.length} hadiths (page ${page}/${response.metadata.totalPages})`);

    return new Response(JSON.stringify(response), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("❌ Error:", errorMessage);
    
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});
