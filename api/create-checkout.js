import Stripe from "stripe";

export default async function handler(req, res) {
  // CORS — allow same-origin requests from the app
  res.setHeader("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { userId, email } = req.body || {};
  if (!userId) {
    return res.status(400).json({ error: "Missing userId" });
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  const priceId = process.env.STRIPE_PRICE_ID;

  if (!secretKey || !priceId) {
    console.error("Missing STRIPE_SECRET_KEY or STRIPE_PRICE_ID env vars");
    return res.status(500).json({ error: "Stripe not configured" });
  }

  if (!secretKey.startsWith("sk_")) {
    console.error("STRIPE_SECRET_KEY does not look like a valid Stripe secret key");
    return res.status(500).json({ error: "Stripe not configured" });
  }

  const stripe = new Stripe(secretKey);
  const origin = req.headers.origin || `https://${req.headers.host}`;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      allow_promotion_codes: true,
      customer_email: email || undefined,
      metadata: { supabase_user_id: userId },
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${origin}/?checkout=success`,
      cancel_url: `${origin}/?checkout=cancel`,
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("create-checkout error:", err.message);
    return res.status(500).json({ error: err.message });
  }
}
