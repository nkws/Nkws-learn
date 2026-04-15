import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Use SUPABASE_URL (non-VITE_ prefix) for server-side, fall back to VITE_ prefix
const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabase = createClient(supabaseUrl, process.env.SUPABASE_SERVICE_ROLE_KEY);

// Disable body parsing so we get the raw body for signature verification
export const config = { api: { bodyParser: false } };

async function buffer(readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

async function updateSubscription(userId, status, stripeCustomerId, stripeSubscriptionId) {
  const { error } = await supabase
    .from("user_subscriptions")
    .upsert({
      user_id: userId,
      status,
      stripe_customer_id: stripeCustomerId,
      stripe_subscription_id: stripeSubscriptionId,
      updated_at: new Date().toISOString(),
    }, { onConflict: "user_id" });
  if (error) console.error("updateSubscription error:", error);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const buf = await buffer(req);
  const sig = req.headers["stripe-signature"];

  let event;
  try {
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return res.status(400).json({ error: "Invalid signature" });
  }

  const subscription = event.data.object;

  switch (event.type) {
    case "checkout.session.completed": {
      const session = subscription;
      const userId = session.metadata?.supabase_user_id;
      if (userId && session.subscription) {
        // Fetch the subscription to get customer ID
        const sub = await stripe.subscriptions.retrieve(session.subscription);
        await updateSubscription(userId, "active", sub.customer, sub.id);
      }
      break;
    }

    case "customer.subscription.updated": {
      const userId = await getUserIdFromCustomer(subscription.customer);
      if (userId) {
        const status = subscription.status === "active" ? "active" : "inactive";
        await updateSubscription(userId, status, subscription.customer, subscription.id);
      }
      break;
    }

    case "customer.subscription.deleted": {
      const userId = await getUserIdFromCustomer(subscription.customer);
      if (userId) {
        await updateSubscription(userId, "cancelled", subscription.customer, subscription.id);
      }
      break;
    }

    default:
      break;
  }

  return res.status(200).json({ received: true });
}

async function getUserIdFromCustomer(customerId) {
  const { data } = await supabase
    .from("user_subscriptions")
    .select("user_id")
    .eq("stripe_customer_id", customerId)
    .single();
  return data?.user_id || null;
}
