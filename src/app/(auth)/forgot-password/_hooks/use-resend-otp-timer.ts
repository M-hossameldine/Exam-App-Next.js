'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type UseResendOtpTimerOptions = {
  key?: string; // localStorage key
  cooldownMs?: number; // 60s default
};

export function useResendOtpTimer(options: UseResendOtpTimerOptions = {}) {
  const { key = 'otp:resend:endsAt', cooldownMs = 60_000 } = options;

  const [endsAt, setEndsAt] = useState<number | null>(null);
  const [now, setNow] = useState(() => Date.now());
  const intervalRef = useRef<number | null>(null);

  // Load persisted value on mount
  useEffect(() => {
    const raw = localStorage.getItem(key);
    if (!raw) return;

    const parsed = Number(raw);
    if (!Number.isFinite(parsed)) {
      localStorage.removeItem(key);
      return;
    }

    // If expired, cleanup
    if (parsed <= Date.now()) {
      localStorage.removeItem(key);
      return;
    }

    setEndsAt(parsed);
  }, [key]);

  const remainingMs = useMemo(() => {
    if (!endsAt) return 0;
    return Math.max(0, endsAt - now);
  }, [endsAt, now]);

  const remainingSeconds = Math.ceil(remainingMs / 1000);
  const canResend = remainingMs === 0;

  // ticking only while active
  useEffect(() => {
    if (!endsAt) return;

    // start interval
    intervalRef.current = window.setInterval(() => {
      setNow(Date.now());
    }, 250);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [endsAt]);

  // stop + cleanup when finished
  useEffect(() => {
    if (!endsAt) return;
    if (remainingMs > 0) return;

    localStorage.removeItem(key);
    setEndsAt(null);

    if (intervalRef.current) window.clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, [endsAt, remainingMs, key]);

  const start = useCallback(() => {
    const newEndsAt = Date.now() + cooldownMs;
    localStorage.setItem(key, String(newEndsAt));
    setNow(Date.now());
    setEndsAt(newEndsAt);
  }, [cooldownMs, key]);

  const reset = useCallback(() => {
    localStorage.removeItem(key);
    setEndsAt(null);
    setNow(Date.now());
  }, [key]);

  return {
    canResend,
    remainingSeconds,
    start,
    reset,
  };
}
