import { useEffect, useState } from "react";

type Parts = { days: string; hours: string; minutes: string; seconds: string };

const ZERO: Parts = { days: "000", hours: "00", minutes: "00", seconds: "00" };

function pad(n: number, size = 2) {
  return String(n).padStart(size, "0");
}

function compute(target: Date): Parts {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return ZERO;
  const total = Math.floor(diff / 1000);
  return {
    days: pad(Math.floor(total / 86400), 3),
    hours: pad(Math.floor((total % 86400) / 3600)),
    minutes: pad(Math.floor((total % 3600) / 60)),
    seconds: pad(total % 60),
  };
}

export default function useCountdown(target: Date): Parts {
  const [parts, setParts] = useState<Parts>(() => compute(target));

  useEffect(() => {
    setParts(compute(target));
    const id = setInterval(() => setParts(compute(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return parts;
}
