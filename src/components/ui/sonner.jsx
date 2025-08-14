"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      style={{
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
        "--success-bg": "hsl(142, 76%, 36%)",
        "--success-text": "hsl(0, 0%, 100%)",
        "--success-border": "hsl(142, 76%, 36%)",
        "--error-bg": "hsl(358, 100%, 97%)",
        "--error-text": "hsl(358, 65%, 48%)",
        "--error-border": "hsl(359, 100%, 94%)",
      }}
      {...props}
    />
  );
};

export { Toaster };
