import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabase = createClient(supabaseUrl, process.env.SUPABASE_SERVICE_ROLE_KEY);

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { userId } = req.body || {};
  if (!userId) {
    return res.status(400).json({ error: "Missing userId" });
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey || !secretKey.startsWith("sk_")) {
    console.error("Missing or invalid STRIPE_SECRET_KEY");
    return res.status(500).json({ error: "Stripe not configured" });
  }

  // Look up the Stripe customer ID from the subscriptions table
  const { data, error } = await supabase
    .from("user_subscriptions")
    .select("stripe_customer_id")
    .eq("user_id", userId)
    .maybeSingle();

  if (error || !data?.stripe_customer_id) {
    return res.status(404).json({ error: "No subscription found" });
  }

  const stripe = new Stripe(secretKey);
  const origin = req.headers.origin || `https://${req.headers.host}`;

  try {
    const session = await stripe.billingPortal.sessions.create({
      customer: data.stripe_customer_id,
      return_url: `${origin}/`,
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("create-portal-session error:", err.message);

    // Stale customer ID (e.g. test-mode ID used with live keys) — clean it up
    if (err.code === "resource_missing") {
      await supabase
        .from("user_subscriptions")
        .delete()
        .eq("user_id", userId);
      return res.status(404).json({ error: "subscription_stale" });
    }

    return res.status(500).json({ error: err.message });
  }
}
