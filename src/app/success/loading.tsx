import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1 flex items-center justify-center relative">
        <BackgroundBeams className="z-0" />
        <div className="relative z-10 max-w-lg w-full mx-auto bg-white/80 rounded-2xl shadow-xl border border-gray-100 p-10 text-center animate-fade-in">
          {/* Icon skeleton */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center justify-center bg-gray-200 rounded-full p-4 shadow-md animate-pulse">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          
          {/* Title skeleton */}
          <div className="mb-4">
            <div className="h-10 bg-gray-200 rounded-lg animate-pulse mx-auto max-w-xs"></div>
          </div>
          
          {/* Description skeleton */}
          <div className="mb-6 space-y-2">
            <div className="h-5 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-5 bg-gray-200 rounded animate-pulse max-w-sm mx-auto"></div>
            <div className="h-5 bg-gray-200 rounded animate-pulse max-w-xs mx-auto"></div>
          </div>
          
          {/* Additional text skeleton */}
          <div className="mb-8 space-y-2">
            <div className="h-4 bg-gray-200 rounded animate-pulse max-w-md mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse max-w-sm mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse max-w-xs mx-auto"></div>
          </div>
          
          {/* Button skeleton */}
          <div className="h-14 bg-gray-200 rounded-lg animate-pulse max-w-xs mx-auto"></div>
        </div>
      </main>
    </div>
  );
}
