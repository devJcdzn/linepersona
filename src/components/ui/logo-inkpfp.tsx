import { Pencil } from "lucide-react";

export const LogoInkPfp = () => {
  return (
    <div className="flex items-center gap-1">
      <div className="size-8 grid place-items-center bg-zinc-900 rounded-full">
        <Pencil className="size-4 text-pink-100" />
      </div>
      <h2 className="font-semibold text-lg">LinePersona</h2>
    </div>
  );
};
