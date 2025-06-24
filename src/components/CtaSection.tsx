"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useInitPayment } from "@/hooks/use-init-payment";
import { ArrowRight, Shield, Upload, Loader2 } from "lucide-react";
import { useRef } from "react";
import { EmailDialog } from "./dialog-payment";

const CtaSection = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { isLoading, handleFileChange } = useInitPayment();

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <section className="py-20 px-4 bg-zinc-900 text-white">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to personalize your profile?
          </h2>

          <p className="text-xl text-gray-300 mb-8">
            Join thousands of professionals who've already upgraded their online
            presence
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="relative">
              <Button
                size="lg"
                className="bg-pink-100 text-zinc-900 hover:bg-pink-200 transition-all duration-200 text-lg px-8 py-6"
                onClick={handleUploadClick}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-5 w-5" />
                    Upload Your Photo Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
              <Input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
            <Shield className="h-4 w-4" />
            <span>100% satisfaction guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
