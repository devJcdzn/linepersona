import { Stripe } from "stripe";
import { ObjectId } from "mongodb";
import { instanceDb } from "./mongo";
import { sendOnDiscord } from "./discord";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-05-28.basil",
});

export async function createCardCheckout({
  id,
  customerEmail,
}: {
  id: string;
  customerEmail: string;
}) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const session = await stripe.checkout.sessions.create({
      customer_email: customerEmail,
      line_items: [
        {
          price: "price_1RcvCsLNTpMfRO2wfS8Tv23L",
          quantity: 1,
        },
      ],
      mode: "payment",
      payment_method_types: ["card"],
      metadata: {
        id,
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

interface IHandlePaymentStripe {
  email: string;
  baseId: string;
}

export const handlePaymentStripe = async ({
  email,
  baseId,
}: IHandlePaymentStripe) => {
  const db = await instanceDb();

  const base = await db.findOne({
    _id: ObjectId.createFromHexString(baseId),
  });

  if (!base) throw new Error("Imagem não encontrada para aprovação.");

  await db.updateOne(
    { _id: base?._id },
    {
      $set: { status: "approved" },
    }
  );

  await sendOnDiscord({
    base: {
      _id: base._id.toString(),
      imageUrl: base.beforeImageUrl,
    },
    email: email || base.email,
  });
};
