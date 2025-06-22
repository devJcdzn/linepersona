import { Stripe } from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-05-28.basil",
});

export async function createCardCheckout({ id }: { id: string }) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: "price_1RcvCsLNTpMfRO2wfS8Tv23L",
          quantity: 1,
        },
      ],
      mode: "payment",
      payment_method_types: ["card"],
      metadata: {
        storyId: id,
      },
      success_url: `${baseUrl}/success?id=${id}`,
      cancel_url: `${baseUrl}`,
    });

    return {
      sessionUrl: session.url,
    };
  } catch (err) {
    console.log(err);
    throw new Error("Error to create payment.");
  }
}
