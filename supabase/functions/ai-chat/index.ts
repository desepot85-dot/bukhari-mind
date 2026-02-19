import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
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

    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      throw new Error("Messages array is required");
    }

    const systemPrompt = `Tu es un assistant spécialisé dans les hadiths du Sahih al-Bukhari, la collection la plus authentique de hadiths dans l'Islam. 

Tes capacités :
- Répondre aux questions sur les hadiths, leur contexte, leur chaîne de transmission (isnad), et leur signification
- Expliquer les enseignements islamiques basés sur les hadiths authentiques
- Fournir le contexte historique des hadiths
- Aider à trouver des hadiths sur des sujets spécifiques
- Expliquer la terminologie du hadith (sahih, hasan, da'if, etc.)
- Répondre en arabe et en français selon la langue de l'utilisateur

Règles importantes :
- Toujours citer les références (numéro du hadith, livre) quand tu mentionnes un hadith
- Être respectueux et académique dans tes réponses
- Si tu n'es pas sûr d'un hadith, dis-le clairement
- Ne jamais inventer de hadiths ou de références
- Encourager l'utilisateur à vérifier les hadiths dans les sources originales
- Répondre dans la même langue que l'utilisateur (français ou arabe)
- Être concis mais complet dans tes réponses`;

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
          ...messages,
        ],
        temperature: 0.7,
        max_tokens: 2048,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI Gateway error:", response.status, errorText);
      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "Désolé, je n'ai pas pu générer une réponse.";

    return new Response(JSON.stringify({ reply }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in ai-chat function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Une erreur est survenue" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
