import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

function normalizeHadithApiKey(raw: string): string {
  const trimmed = raw.trim();

  // Common user mistake: pasting the entire URL instead of the key.
  // Example: https://hadithapi.com/api/.../chapters?apiKey=XYZ
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    try {
      const u = new URL(trimmed);
      const key = u.searchParams.get('apiKey');
      if (key) return key;
      return trimmed;
    } catch {
      return trimmed;
    }
  }

  // Another common paste: "apiKey=XYZ" or "...apiKey=XYZ"
  const idx = trimmed.indexOf('apiKey=');
  if (idx !== -1) {
    return trimmed.slice(idx + 'apiKey='.length).split('&')[0].trim();
  }

  return trimmed;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const HADITH_API_KEY_RAW = Deno.env.get('HADITH_API_KEY');
    
    if (!HADITH_API_KEY_RAW) {
      console.error('HADITH_API_KEY is not configured');
      return new Response(
        JSON.stringify({ error: 'API key not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const HADITH_API_KEY = normalizeHadithApiKey(HADITH_API_KEY_RAW);
    if (!HADITH_API_KEY) {
      console.error('HADITH_API_KEY is empty after normalization');
      return new Response(
        JSON.stringify({ error: 'API key is empty' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Fetching all hadiths from Sahih al-Bukhari...');
    console.log('Using API key prefix:', HADITH_API_KEY.substring(0, 6) + '...');
    
    // Test avec l'endpoint chapters d'abord
    const url = `https://hadithapi.com/api/sahih-bukhari/chapters?apiKey=${HADITH_API_KEY}`;
    console.log('Fetching from URL:', url.replace(HADITH_API_KEY, 'API_KEY_HIDDEN'));
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error('API error:', response.status, response.statusText);
      const errorText = await response.text();
      console.error('Error response:', errorText);
      return new Response(
        JSON.stringify({
          error: 'Failed to fetch hadiths from API',
          upstream_status: response.status,
          upstream_body: errorText,
        }),
        { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    console.log(`Successfully fetched ${data.hadiths?.length || 0} hadiths`);

    return new Response(
      JSON.stringify(data),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in fetch-hadiths function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
