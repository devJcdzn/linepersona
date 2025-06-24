# LinePersona

Minimal avatars for maximum impact. Transform your profile picture into a professional, minimalist avatar that stands out across all platforms.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [FAQ](#faq)
- [License](#license)

---

## Features
- Upload your photo and receive a hand-drawn, minimalist avatar
- Fast delivery (typically within 30–60 minutes)
- Secure photo processing and privacy-first approach
- High-resolution PNG output, ready for all social platforms
- Stripe-powered payments
- Cloudflare R2 for image storage
- MongoDB for data persistence
- Discord webhook notifications for new orders
- Responsive, modern UI with Tailwind CSS and shadcn/ui components
- Example gallery, testimonials, and FAQ sections

---

## Tech Stack
- **Framework:** Next.js (App Router, TypeScript)
- **Styling:** Tailwind CSS, tw-animate-css, shadcn/ui
- **Database:** MongoDB (Atlas or self-hosted)
- **Payments:** Stripe
- **Storage:** Cloudflare R2 (S3-compatible)
- **Notifications:** Discord Webhook
- **UI:** React 19, Lucide Icons, Geist font

---

## Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd ink
```

### 2. Install dependencies
```bash
pnpm install # or npm install, yarn install, bun install
```

### 3. Set up environment variables
Create a `.env.local` file in the root directory and add the following:
```env
# MongoDB
MONGO_URI=your_mongodb_connection_string

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WHSEC=your_stripe_webhook_secret
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Cloudflare R2
CLOUDFLARE_R2_URL=your_r2_endpoint_url
CLOUDFLARE_R2_ID=your_r2_access_key_id
CLOUDFLARE_R2_SECRET=your_r2_secret_access_key
R2_BUCKET_NAME=your_r2_bucket_name
CLOUDFLARE_R2_PUBLIC_URL=your_r2_public_url

# Discord
DC_WEBHOOK_SINGLE=your_discord_webhook_url
```

### 4. Run the development server
```bash
pnpm dev # or npm run dev, yarn dev, bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

---

## Usage
1. **Upload your photo:** Click the upload button and select your best photo.
2. **Enter your email:** You'll be prompted to provide your email for delivery and receipt.
3. **Payment:** Complete the payment securely via Stripe.
4. **Processing:** Your photo is hand-drawn by a designer (not AI!) and delivered as a minimalist avatar.
5. **Download:** Receive a high-res PNG, ready for all your social and professional platforms.

---

## Environment Variables
| Name                      | Description                        |
|---------------------------|------------------------------------|
| `MONGO_URI`               | MongoDB connection string           |
| `STRIPE_SECRET_KEY`       | Stripe secret key                   |
| `STRIPE_WHSEC`            | Stripe webhook secret               |
| `NEXT_PUBLIC_BASE_URL`    | Public URL for success/cancel URLs  |
| `CLOUDFLARE_R2_URL`       | Cloudflare R2 endpoint URL          |
| `CLOUDFLARE_R2_ID`        | Cloudflare R2 access key ID         |
| `CLOUDFLARE_R2_SECRET`    | Cloudflare R2 secret access key     |
| `R2_BUCKET_NAME`          | Cloudflare R2 bucket name           |
| `CLOUDFLARE_R2_PUBLIC_URL`| Public URL for R2 assets            |
| `DC_WEBHOOK_SINGLE`       | Discord webhook URL for notifications|

---

## FAQ
- **How fast is delivery?**
  - We deliver your minimalist avatar within 30–60 minutes after payment confirmation. Most orders are completed even faster!
- **Are avatars made with AI?**
  - No. Our avatars are hand-drawn and delivered with the highest possible quality.
- **What file format will I get?**
  - You'll receive high-resolution PNG files, perfect for all social media platforms, websites, and print materials.
- **What if I don't like my avatar?**
  - Just email us—you get one free revision.
- **Where can I use my avatar?**
  - Everywhere! LinkedIn, Twitter/X, GitHub, Instagram, Discord, Slack, email signatures, business cards, and more.
- **What style of avatar will I get?**
  - Our signature minimalist style features clean lines, simple shapes, and your brand colors. More styles coming soon!

---

## License

This project is licensed under the MIT License.
