"use client";

import { useState } from "react";
import { CustomizationControls } from "@/components/customization-controls";

export default function Home() {
  const [color, setColor] = useState("#9400D3");
  const [fontSize, setFontSize] = useState(96);

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background p-4">
      <div className="flex flex-grow items-center justify-center">
        <h1
          className="font-headline text-center font-extrabold break-words transition-all duration-300 animate-in fade-in-0 slide-in-from-top-10"
          style={{ color: color, fontSize: `${fontSize}px`, lineHeight: 1.1 }}
          aria-live="polite"
        >
          Olá mundo
        </h1>
      </div>

      <div className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-lg z-10">
        <CustomizationControls
          color={color}
          setColor={setColor}
          fontSize={fontSize}
          setFontSize={setFontSize}
        />
      </div>
    </main>
  );
}
