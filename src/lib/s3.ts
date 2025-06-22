// lib/r2.ts
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

export const r2 = new S3Client({
  region: "auto",
  endpoint: process.env.CLOUDFLARE_R2_URL as string,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_R2_ID as string,
    secretAccessKey: process.env.CLOUDFLARE_R2_SECRET as string,
  },
});

export async function uploadToR2(fileData: string, key: string): Promise<string> {
  const buffer = Buffer.from(fileData, 'base64');

  await r2.send(
    new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME!,
      Key: key,
      Body: buffer,
      ContentType: 'image/jpeg', // You might want to make this dynamic based on the file type
    })
  );

  return `${process.env.CLOUDFLARE_R2_PUBLIC_URL}/${key}`;
}