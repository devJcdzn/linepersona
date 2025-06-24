"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { CircleCheckBig } from "lucide-react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SuccessPage() {
  const router = useRouter();
  const params = useSearchParams();
  const id = params.get("id");

  useEffect(() => {
    if (!id) {
      router.push("/");
    }
  }, [id, router]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1 flex items-center justify-center relative">
        <BackgroundBeams className="z-0" />
        <div className="relative z-10 max-w-lg w-full mx-auto bg-white/80 rounded-2xl shadow-xl border border-gray-100 p-10 text-center animate-fade-in">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center justify-center bg-pink-100 rounded-full p-4 shadow-md">
              <CircleCheckBig className="w-12 h-12 text-pink-400" />
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Payment Successful!
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for your purchase. Your minimalist avatar is being created
            and will be delivered to your email within 30 minutes.
          </p>
          <div className="mb-8">
            <p className="text-sm text-gray-500">
              If you have any questions or need help, just reply to your
              confirmation email.
              <br />
              We appreciate your trust in{" "}
              <span className="font-semibold text-zinc-900">LinePersona</span>!
            </p>
          </div>
          <Link href="/">
            <Button
              size="lg"
              className="bg-pink-100 text-zinc-900 hover:bg-pink-200 transition-all duration-200 text-lg px-8 py-6"
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
