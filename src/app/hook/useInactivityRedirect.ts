"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function useInactivityRedirect(redirectTo: string, timeoutMs: number = 15000) {
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const resetTimer = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        router.push(redirectTo);
      }, timeoutMs);
    };

    const events = ["mousemove", "keydown", "touchstart", "click"];
    events.forEach((event) => window.addEventListener(event, resetTimer));

    resetTimer();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      events.forEach((event) => window.removeEventListener(event, resetTimer));
    };
  }, [redirectTo, timeoutMs, router]);
}
