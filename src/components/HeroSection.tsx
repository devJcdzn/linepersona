"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Upload, Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { useInitPayment } from "@/hooks/use-init-payment";
import { EmailDialog } from "./dialog-payment";

const HeroSection = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const {
    isLoading,
    isDialogOpen,
    setIsDialogOpen,
    email,
    setEmail,
    handleSubmit,
    handleFileChange,
  } = useInitPayment();

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <EmailDialog
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        email={email}
        setEmail={setEmail}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
      <BackgroundBeams className="z-0" />
      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6 leading-tight">
            Turn Your Photo Into a<br />
            <span className="bg-gradient-to-r from-zinc-900 to-gray-600 bg-clip-text text-transparent">
              Minimalist Profile Avatar
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Stand out on LinkedIn, Twitter/X, GitHub and beyond.
          </p>

          <div className="flex flex-col gap-4 justify-center items-center mb-6">
            <div className="relative">
              <Button
                size="lg"
                className="bg-pink-100 text-zinc-900 hover:bg-pink-200 transition-all duration-200 text-lg px-8 py-6"
                onClick={handleUploadClick}
                disabled={isLoading}
                aria-label="Upload your photo to get started"
              >
                {isLoading ? (
                  <>
                    <Loader2
                      className="mr-2 h-5 w-5 animate-spin"
                      aria-hidden="true"
                    />
                    Processing...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-5 w-5" aria-hidden="true" />
                    Upload Your Photo
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </>
                )}
              </Button>
              <Input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                aria-label="Upload photo input"
              />
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <div
                className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                aria-hidden="true"
              />
              <span>Delivered within 30 minutes</span>
            </div>
          </div>

          {/* Feature/Trust List */}
          <ul
            className="flex flex-wrap justify-center gap-4 mb-10 text-gray-500 text-sm"
            aria-label="Key features"
          >
            <li className="flex items-center gap-2">
              <span role="img" aria-label="star">
                ⭐
              </span>{" "}
              1000+ happy users
            </li>
            <li className="flex items-center gap-2">
              <span role="img" aria-label="lightning">
                ⚡
              </span>{" "}
              Fast delivery
            </li>
          </ul>

          {/* Secondary CTA */}
          <Button
            variant="outline"
            size="lg"
            className="mb-12 border-gray-300 hover:bg-gray-100 transition-all z-50"
            aria-label="See more examples"
            onClick={() =>
              document.getElementById("examples")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            See more examples
          </Button>
        </div>

        {/* Before/After Visual Example */}
        <div className="animate-slide-up max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              Recent Transformation
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-4">Before</p>
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-200">
                  <img
                    src="/jc-prev.jpeg"
                    alt="Before: original user photo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="block mt-2 text-xs text-gray-400">
                  Original photo
                </span>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-500 mb-4">After</p>
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-zinc-400 shadow-lg animate-pulse-slow">
                  <img
                    src="/jc-new.jpg"
                    alt="After: minimalist avatar transformation"
                    className="w-full h-full object-cover bg-gradient-to-br from-pink-100 to-pink-200"
                  />
                </div>
                <span className="block mt-2 text-xs text-pink-400">
                  Minimalist avatar delivered
                </span>
              </div>
            </div>
            <hr className="my-8 border-gray-200" />
            <p className="text-center text-gray-500 text-sm">
              Your privacy is our priority. Photos are processed securely and
              deleted after delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
