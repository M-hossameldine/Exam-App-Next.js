'use client';

import * as React from 'react';
import { cn } from '@/lib/utils/tailwind-merge';
import { clamp } from '@/lib/utils/numbers.utils';
import { formatMMSS } from '@/lib/utils/data-time.utils';

type CircularTimerProps = {
  minutes: number /** Exam duration in minutes (e.g. 20) */;
  initialRemainingSeconds?: number /** Optional: start remaining seconds (if resumed from backend/localStorage) */;
  onComplete?: () => void;
  size?: number;
  strokeWidth?: number;
  className?: string;
};

export default function CircularTimer({
  minutes,
  initialRemainingSeconds,
  onComplete,
  size = 60,
  strokeWidth = 10,
  className,
}: CircularTimerProps) {
  const totalSeconds = Math.max(1, Math.floor(minutes * 60));

  // remaining seconds in state (countdown)
  const [remaining, setRemaining] = React.useState(() =>
    clamp(initialRemainingSeconds ?? totalSeconds, 0, totalSeconds)
  );

  // If minutes changes, reset remaining to full
  React.useEffect(() => {
    setRemaining(
      clamp(initialRemainingSeconds ?? totalSeconds, 0, totalSeconds)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalSeconds]);

  // tick every second
  React.useEffect(() => {
    if (remaining <= 0) return;

    const id = window.setInterval(() => {
      setRemaining(r => {
        const next = Math.max(0, r - 1);
        if (next === 0) onComplete?.();
        return next;
      });
    }, 1000);

    return () => window.clearInterval(id);
  }, [remaining, onComplete]);

  const consumedSeconds = totalSeconds - remaining;
  const consumedPercent = (consumedSeconds / totalSeconds) * 100; // 0..100

  // SVG math
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // We draw progress using dashoffset:
  // 0% -> offset = circumference (nothing shown)
  // 100% -> offset = 0 (full ring)
  const progressOffset =
    circumference - (consumedPercent / 100) * circumference;

  return (
    <div
      className={cn(
        'relative inline-flex items-center justify-center',
        className
      )}
      style={{ width: size, height: size }}
      aria-label={`Time remaining ${formatMMSS(remaining)}`}
      role="timer"
    >
      {/* rotate so it starts from top-ish */}
      <svg width={size} height={size} className="-rotate-[85deg]">
        {/* Track (full ring) */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="hsl(var(--muted))"
          strokeWidth={strokeWidth}
        />

        {/* Progress (consumed) */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="hsl(var(--primary))"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          strokeLinecap="square"
          className="transition-[stroke-dashoffset] duration-300"
        />
      </svg>

      {/* label */}
      <span className="absolute text-xs font-medium tabular-nums">
        {formatMMSS(remaining)}
      </span>
    </div>
  );
}
