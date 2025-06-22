"use client";
import { createPayment } from "@/actions";
import { useState } from "react";

export const useInitPayment = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCreatePayment = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsLoading(true);
      console.log("File uploaded:", file.name);
      // TODO: Forward to payment process
      // This is where we would process the image and redirect to payment

      await createPayment(file);
      setIsLoading(false);
    }
  };

  return { isLoading, handleCreatePayment };
};
