'use client'

import { Button } from "@/components/ui/button"
import { SiLineHex, SiReact, SiVercel } from "@icons-pack/react-simple-icons"
import { useTheme } from "next-themes"

export const Icon = () => {
  const theme = useTheme();

  return (
    <div className="flex gap-6">
      <SiReact size={80} color="default" />
      <SiVercel
        size={80}
        color={theme.resolvedTheme !== "dark" ? "default" : undefined}
      />

      <Button
        style={{
          backgroundColor: SiLineHex,
        }}
        className="text-white"
      >
        Line
      </Button>
    </div>
  );
}