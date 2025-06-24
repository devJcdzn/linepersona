"use server";

import { redirect } from "next/navigation";
import { instanceDb } from "./lib/mongo";
import { uploadToR2 } from "./lib/s3";
import { createCardCheckout } from "./lib/stripe";

export async function createPayment(image: File, email: string) {
  const fileKey = `uploads-inkpfp/${Date.now()}-${image.name}`;

  let sessionUrl: string | null;

  try {
    const imageBuffer = await image.arrayBuffer();
    const imageBase64 = Buffer.from(imageBuffer).toString("base64");

    const imageUrl = await uploadToR2(imageBase64, fileKey);
    const db = await instanceDb();

    const baseImage = {
      beforeImageUrl: imageUrl,
      status: "pending",
      createdAt: new Date(),
      email,
    };

    const result = await db.insertOne(baseImage);

    const baseCreated = await db.findOne({ _id: result.insertedId });

    if (!baseCreated) throw new Error("Error to create payment");

    const checkout = await createCardCheckout({
      id: baseCreated._id.toString(),
      customerEmail: baseCreated.email,
    });

    if (!checkout.sessionUrl) throw new Error("Error to create payment");

    sessionUrl = checkout.sessionUrl;
  } catch (err) {
    console.error("Error uploading image:", err);
    throw err;
  }

  redirect(sessionUrl);
}
