"use client";

import { PropsWithChildren } from "react";
import { EmailDialog } from "./dialog-payment";
import { useInitPayment } from "@/hooks/use-init-payment";

export const Wrapper = ({ children }: PropsWithChildren) => {
  const {
    isLoading,
    isDialogOpen,
    setIsDialogOpen,
    email,
    setEmail,
    handleSubmit,
  } = useInitPayment();

  return (
    <div className="min-h-screen bg-gray-50">
      <EmailDialog
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        email={email}
        setEmail={setEmail}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
      {children}
    </div>
  );
};
