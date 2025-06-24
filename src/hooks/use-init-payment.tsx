"use client";

import { createPayment } from "@/actions";
import { useState, useCallback } from "react";

export const useInitPayment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [email, setEmail] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setIsDialogOpen(true);
      event.target.value = ""; // Reset file input
    }
  };

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      if (selectedFile && email) {
        setIsLoading(true);
        setIsDialogOpen(false);
        await createPayment(selectedFile, email);
        setIsLoading(false);
      }
    },
    [selectedFile, email]
  );

  return {
    isLoading,
    isDialogOpen,
    setIsDialogOpen,
    email,
    setEmail,
    handleFileChange,
    handleSubmit,
  };
};
