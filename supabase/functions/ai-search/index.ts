import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const { query, mode = "search" } = await req.json();

    if (!query || typeof query !== "string") {
      throw new Error("Query string is required");
    }

    console.log(`[ai-search] Query: "${query}", Mode: ${mode}`);

    const systemPrompt = `Tu es un moteur de recherche intelligent spécialisé dans le Sahih al-Bukhari.

L'utilisateur te pose une question en langage naturel. Tu dois analyser sa question en profondeur et fournir une réponse structurée.

Tu DOIS répondre UNIQUEMENT en JSON valide avec cette structure exacte :
{
  "analysis": "Brève analyse de la question de l'utilisateur (2-3 phrases)",
  "results": [
    {
      "hadithNumber": 1,
      "bookId": 1,
      "bookName": "Nom du livre en français",
      "relevance": "high|medium|low",
      "textAr": "Texte du hadith en arabe (résumé si trop long)",
      "textFr": "Texte du hadith en français (résumé si trop long)",
      "explanation": "Pourquoi ce hadith est pertinent pour la question posée (2-3 phrases)",
      "narrator": "Nom du narrateur principal",
      "themes": ["thème1", "thème2"]
    }
  ],
  "deepAnalysis": "Analyse approfondie du sujet basée sur l'ensemble des hadiths trouvés. Contexte historique, liens entre les hadiths, enseignements principaux. (paragraphe détaillé)",
  "relatedTopics": ["Sujet connexe 1", "Sujet connexe 2", "Sujet connexe 3"],
  "totalFound": 5
}

Règles :
- Retourne entre 3 et 10 hadiths pertinents, classés par pertinence
- Les numéros de hadiths doivent correspondre à la numérotation officielle de sunnah.com (1 à 7563)
- Les bookId doivent correspondre aux 97 livres du Sahih al-Bukhari
- L'analyse approfondie (deepAnalysis) doit être riche, détaillée et académique
- Si la question est vague, interprète-la largement et fournis des résultats variés
- Réponds dans la même langue que la question (français ou arabe)
- NE JAMAIS inventer de hadiths - cite uniquement des hadiths authentiques du Sahih al-Bukhari
- Si tu n'es pas sûr d'un numéro exact, mentionne-le dans l'explication
- Les thèmes doivent être des mots-clés courts et pertinents`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: query },
        ],
        temperature: 0.3,
        max_tokens: 4096,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI Gateway error:", response.status, errorText);

      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Trop de requêtes. Veuillez réessayer dans quelques instants." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Crédits IA épuisés. Veuillez réessayer plus tard." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const data = await response.json();
    const rawReply = data.choices?.[0]?.message?.content || "";

    console.log(`[ai-search] Raw reply length: ${rawReply.length}`);

    // Parse JSON from the response (handle markdown code blocks)
    let searchResults;
    try {
      let jsonStr = rawReply.trim();
      // Remove markdown code fences if present
      if (jsonStr.startsWith("```")) {
        jsonStr = jsonStr.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
      }
      searchResults = JSON.parse(jsonStr);
    } catch (parseErr) {
      console.error("Failed to parse AI response as JSON:", parseErr);
      console.error("Raw response:", rawReply.substring(0, 500));
      // Fallback: return raw text as analysis
      searchResults = {
        analysis: rawReply,
        results: [],
        deepAnalysis: "L'analyse n'a pas pu être structurée. Veuillez reformuler votre question.",
        relatedTopics: [],
        totalFound: 0,
      };
    }

    return new Response(JSON.stringify(searchResults), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in ai-search function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Une erreur est survenue" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
