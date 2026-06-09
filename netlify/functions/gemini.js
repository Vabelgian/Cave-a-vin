export default async (request, context) => {
  // 1. On prépare les en-têtes CORS ultra-permissifs
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json"
  };

  // 2. Si le navigateur fait sa pré-vérification (OPTIONS), on répond direct un statut 200 (OK) avec les headers
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 200, headers });
  }

  // 3. On n'accepte que le POST pour le traitement
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Méthode non autorisée" }), { status: 405, headers });
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Clé API manquante dans Netlify." }), { status: 500, headers });
    }

    const { prompt } = await request.json();

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${apiKey}`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), { status: 200, headers });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers });
  }
};
