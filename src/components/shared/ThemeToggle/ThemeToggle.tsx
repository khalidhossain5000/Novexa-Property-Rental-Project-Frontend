"use client";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";


const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-8 h-8 lg:w-9 lg:h-9 rounded-full cursor-pointer"
    >
      <motion.div
        key={isDark ? "dark" : "light"}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className={`absolute inset-0 rounded-full ${
          isDark ? "bg-accent-soft" : "bg-accent"
        }`}
      />

      <motion.div
        key={isDark ? "moon" : "sun"}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3 }}
        className="relative z-10"
      >
        {isDark ? (
          <Moon className="w-6 h-6 text-white" />
        ) : (
          <Sun className="w-6 h-6 text-white" />
        )}
      </motion.div>
    </Button>
  );
};

export default ThemeToggle;