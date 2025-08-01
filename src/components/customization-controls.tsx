"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

interface CustomizationControlsProps {
  color: string;
  setColor: (color: string) => void;
  fontSize: number;
  setFontSize: (size: number) => void;
}

export function CustomizationControls({
  color,
  setColor,
  fontSize,
  setFontSize,
}: CustomizationControlsProps) {
  const colorSwatches = [
    { value: "#9400D3", label: "Vibrant Purple" }, // Primary
    { value: "#FF1493", label: "Deep Magenta" },   // Accent
    { value: "#2dd4bf", label: "Teal" },
    { value: "#f59e0b", label: "Amber" },
    { value: "#1f2937", label: "Gray" },
  ];

  return (
    <div className="w-full animate-in fade-in-0 slide-in-from-bottom-10 duration-700">
      <Card className="shadow-2xl backdrop-blur-sm bg-card/80">
        <CardHeader>
          <CardTitle className="font-headline">Customize Your World</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="font-size" className="font-medium">
                Font Size
              </Label>
              <span className="text-sm font-mono px-2 py-1 bg-muted rounded-md">{fontSize}px</span>
            </div>
            <Slider
              id="font-size"
              min={12}
              max={256}
              step={1}
              value={[fontSize]}
              onValueChange={(value) => setFontSize(value[0])}
              aria-label="Font size slider"
            />
          </div>
          <div className="grid gap-2">
            <Label className="font-medium">Color</Label>
            <div className="flex flex-wrap gap-3">
              {colorSwatches.map((swatch) => (
                <Button
                  key={swatch.value}
                  aria-label={`Set color to ${swatch.label}`}
                  title={swatch.label}
                  variant="outline"
                  className={`h-10 w-10 rounded-full p-0 border-2 transition-all duration-200 focus:ring-4 focus:ring-offset-2 ${
                    color === swatch.value
                      ? "border-primary/80 ring-2 ring-ring ring-offset-background"
                      : "border-muted-foreground/20"
                  }`}
                  style={{ backgroundColor: swatch.value }}
                  onClick={() => setColor(swatch.value)}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
