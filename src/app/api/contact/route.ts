import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  service: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(2000),
});

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "";

function createTimedFetch(timeoutMs: number) {
  return (input: Parameters<typeof fetch>[0], init?: Parameters<typeof fetch>[1]) => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);

    return fetch(input, { ...init, signal: controller.signal }).finally(() => {
      clearTimeout(timeout);
    });
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    if (!supabaseUrl || !supabaseKey) {
      console.warn("contact submission accepted without persistence: Supabase is not configured", {
        email: data.email,
        service: data.service || null,
      });
      return new Response(JSON.stringify({ ok: true, persisted: false }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    const supabaseAdmin = createClient(supabaseUrl, supabaseKey, {
      global: {
        fetch: createTimedFetch(3500),
      },
    });
    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      company: data.company || null,
      service: data.service || null,
      message: data.message,
    });

    if (error) {
      console.warn("contact persistence unavailable; falling back to email path", error);
      return new Response(JSON.stringify({ ok: true, persisted: false }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("contact error", err);
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
