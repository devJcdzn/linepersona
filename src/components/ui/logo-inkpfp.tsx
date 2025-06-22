import { Pencil } from "lucide-react";

export const LogoInkPfp = () => {
  return (
    <div className="flex items-center gap-1">
      <div className="size-8 grid place-items-center p-2 bg-zinc-900 rounded-full">
        <Pencil className="size-4 text-pink-100" />
      </div>
      <h2 className="font-semibold">InkPfp</h2>
    </div>
  );
};
