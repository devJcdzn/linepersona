"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import { LogoInkPfp } from "./ui/logo-inkpfp";
import { useInitPayment } from "@/hooks/use-init-payment";
import { EmailDialog } from "./dialog-payment";

const Header = () => {
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
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <EmailDialog
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        email={email}
        setEmail={setEmail}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <LogoInkPfp />
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#how-it-works"
            className="text-gray-600 hover:text-zinc-900 transition-colors"
          >
            How it works
          </a>
          <a
            href="#examples"
            className="text-gray-600 hover:text-zinc-900 transition-colors"
          >
            Examples
          </a>
          <a
            href="#testimonials"
            className="text-gray-600 hover:text-zinc-900 transition-colors"
          >
            Reviews
          </a>
          <a
            href="#faq"
            className="text-gray-600 hover:text-zinc-900 transition-colors"
          >
            FAQ
          </a>
        </nav>
        <div className="relative">
          <Button
            className="bg-pink-100 text-zinc-900 hover:bg-pink-200 transition-colors"
            onClick={handleUploadClick}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Upload Photo
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
    </header>
  );
};

export default Header;
