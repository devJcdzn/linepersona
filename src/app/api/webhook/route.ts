import { stripe } from "@/lib/stripe";
import { handlePaymentStripe } from "@/lib/stripe";
import { headers } from "next/headers";

const whsec = process.env.STRIPE_WHSEC;

export async function POST(request: Request) {
  const body = await request.text();
  const sig = (await headers()).get("stripe-signature");

  if (!sig || !whsec) throw new Error("Missgin wshec or signature header.");

  const event = stripe.webhooks.constructEvent(body, sig, whsec);

  switch (event.type) {
    case "checkout.session.completed": {
      const objectEvent = event.data.object;
      if (objectEvent.payment_status === "paid") {
        const baseId = objectEvent.metadata?.id;
        const email = objectEvent.customer_email;

        if (!email || !baseId) throw new Error("Payment not recognized.");

        //TODO handle payment
        await handlePaymentStripe({ email, baseId });
      }

      break;
    }
    case "checkout.session.expired": {
      //Delete all records on database
      break;
    }
    default: {
      console.log("Unhandled Payment.");
    }
  }
}
