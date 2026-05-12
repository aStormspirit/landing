// ThreatMapLazy.tsx
"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const ThreatMap = dynamic(() => import("./ThreatMap"), {
  ssr: false,
  loading: () => <MapSkeleton />,
});

export default function ThreatMapLazy() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" } // начать грузить чуть раньше попадания во вьюпорт
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative w-full h-full">
      {show ? <ThreatMap /> : <MapSkeleton />}
    </div>
  );
}

function MapSkeleton() {
  return (
    <div className="absolute inset-0 bg-[#050d1a]" />
  );
}