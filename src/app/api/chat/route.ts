const SYSTEM_PROMPT = `You are the AI assistant for AYK Solutions, a premium software development company.

About AYK Solutions:
- We build custom websites, web applications, automations, WordPress sites, Shopify/e-commerce stores, custom software, and inventory management systems for businesses.
- Our process: Discover → Design → Build → Launch → Support.
- Office: Chau. d'Anvers 11, 1000 Bruxelles, Belgium.
- Phone / WhatsApp: +32 466 31 77 14.
- Typical timelines: marketing websites 3-6 weeks, web apps / SaaS MVPs 10-16 weeks, custom software 12+ weeks.
- Pricing is project-based after a free discovery call.
- To start a project, visit /contact, call/WhatsApp +32 466 31 77 14, or email hello@ayksolutions.com.

Guidelines:
- Be concise, warm and professional. Use short paragraphs and bullet points where helpful.
- Always steer interested visitors toward booking a discovery call via the Contact page or WhatsApp.
- If a question is unrelated to AYK Solutions (e.g. general coding help, weather, news), politely redirect: "I can only help with questions about AYK Solutions and our services."
- Never invent specific prices, employee names, or commitments. If unsure, suggest contacting the team directly.`;

function streamFallback(message: string) {
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(
        encoder.encode(
          `data: ${JSON.stringify({ choices: [{ delta: { content: message } }] })}\n\n`,
        ),
      );
      controller.enqueue(encoder.encode("data: [DONE]\n\n"));
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}

function fallbackAnswer(messages: Array<{ role: string; content: string }>) {
  const latest = messages[messages.length - 1]?.content.toLowerCase() ?? "";

  if (latest.includes("shopify") || latest.includes("ecommerce") || latest.includes("store")) {
    return "Yes. AYK Solutions builds Shopify and e-commerce storefronts, including custom themes, headless builds, product pages, cart flows, and conversion-focused improvements. The best next step is to share your store goals on the Contact page so we can recommend a scope.";
  }

  if (latest.includes("time") || latest.includes("long") || latest.includes("timeline")) {
    return "Typical timelines are 3-6 weeks for marketing websites, 10-16 weeks for web apps or SaaS MVPs, and 12+ weeks for larger custom software. A quick discovery call helps us give you a realistic project timeline.";
  }

  if (latest.includes("start") || latest.includes("contact") || latest.includes("project")) {
    return "To start a project, use the Contact page and share what you want to build, your timeline, and any constraints. AYK Solutions replies within one business day with a practical next step.";
  }

  return "AYK Solutions builds custom websites, web applications, automation workflows, Shopify/e-commerce stores, WordPress sites, inventory systems, and custom software. Tell us what you need to build on the Contact page and we will help shape the right scope.";
}

export async function POST(request: Request) {
  try {
    const { messages } = (await request.json()) as {
      messages: Array<{ role: "user" | "assistant"; content: string }>;
    };

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "messages array required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // basic guard: cap message count + length
    const trimmed = messages.slice(-20).map((m) => ({
      role: m.role,
      content: String(m.content ?? "").slice(0, 2000),
    }));

    const apiKey = process.env.LOVABLE_API_KEY;
    if (!apiKey) {
      return streamFallback(fallbackAnswer(trimmed));
    }

    const upstream = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        stream: true,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...trimmed],
      }),
    });

    if (!upstream.ok) {
      if (upstream.status === 429)
        return new Response(JSON.stringify({ error: "Rate limit" }), {
          status: 429,
          headers: { "Content-Type": "application/json" },
        });
      if (upstream.status === 402)
        return new Response(JSON.stringify({ error: "Credits exhausted" }), {
          status: 402,
          headers: { "Content-Type": "application/json" },
        });
      const text = await upstream.text();
      console.error("AI gateway error", upstream.status, text);
      return streamFallback(fallbackAnswer(trimmed));
    }

    // Pass through the streaming response
    return new Response(upstream.body, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
