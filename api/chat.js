const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

function normalizeLang(code) {
  const raw = String(code || "").toLowerCase();
  if (raw.startsWith("zh")) return "Traditional Chinese";
  if (raw.startsWith("ja")) return "Japanese";
  if (raw.startsWith("ko")) return "Korean";
  if (raw.startsWith("ru")) return "Russian";
  if (raw.startsWith("es")) return "Spanish";
  return "English";
}

function readBody(req) {
  if (typeof req.body === "object" && req.body) return req.body;
  if (typeof req.body === "string" && req.body.trim()) {
    try {
      return JSON.parse(req.body);
    } catch (_) {
      return {};
    }
  }
  return {};
}

module.exports = async function handler(req, res) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Allow", "POST");
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: "OPENAI_API_KEY is not configured" }));
    return;
  }

  const body = readBody(req);
  const q = String(body.q || "").trim();
  const lang = normalizeLang(body.lang);
  if (!q) {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: "Missing question" }));
    return;
  }

  const systemPrompt =
    "You are the customer consultation assistant for Mashiro Visuals, a Japan-based wedding and elopement photography studio. " +
    "Be warm, concise, and practical. Keep answers helpful for planning (pricing ranges, locations, booking flow, delivery timing, weather backups, costume options). " +
    "Never fabricate exact contract terms or guaranteed final quotes. If details are uncertain, say they need human confirmation and suggest WhatsApp or reserve form. " +
    `Reply in ${lang}.`;

  try {
    const upstream = await fetch(OPENAI_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: 0.5,
        max_tokens: 320,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: q },
        ],
      }),
    });

    const data = await upstream.json();
    const reply =
      data &&
      data.choices &&
      data.choices[0] &&
      data.choices[0].message &&
      typeof data.choices[0].message.content === "string"
        ? data.choices[0].message.content.trim()
        : "";

    if (!upstream.ok || !reply) {
      const reason =
        (data && data.error && data.error.message) || "Failed to get OpenAI response";
      res.statusCode = 502;
      res.end(JSON.stringify({ error: reason }));
      return;
    }

    res.statusCode = 200;
    res.end(JSON.stringify({ reply }));
  } catch (err) {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: "Chat service temporarily unavailable" }));
  }
};
