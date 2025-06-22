"use server";

import { redirect } from "next/navigation";
import { instanceDb } from "./lib/mongo";
import { uploadToR2 } from "./lib/s3";
import { createCardCheckout } from "./lib/stripe";

export async function createPayment(image: File) {
  // Using Date.now() for a clean, unique, and safe file key.
  const fileKey = `uploads-inkpfp/${Date.now()}-${image.name}`;

  try {
    // Convert the File to a base64 string to pass to uploadToR2.
    const imageBuffer = await image.arrayBuffer();
    const imageBase64 = Buffer.from(imageBuffer).toString("base64");

    const imageUrl = await uploadToR2(imageBase64, fileKey);

    // TODO: The imageUrl can now be used, e.g., saved to a database.
    const db = await instanceDb();

    const baseImage = {
      beforeImageUrl: imageUrl,
      status: "pending",
      createdAt: new Date(),
    };

    const result = await db.insertOne(baseImage);

    const baseCreated = await db.findOne({ _id: result.insertedId });

    if (!baseCreated) throw new Error("Error to create payment");

    const { sessionUrl } = await createCardCheckout({
      id: baseCreated._id.toString(),
    });

    if (!sessionUrl) throw new Error("Error to create payment");

    redirect(sessionUrl);

    return {
      checkoutUrl: sessionUrl,
    };
  } catch (err) {
    console.error("Error uploading image:", err);
    // It's good practice to handle or re-throw the error.
    throw err;
  }
}
