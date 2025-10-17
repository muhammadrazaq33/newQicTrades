"use client";

import { useState, useEffect } from "react";
import WorldMap from "@/components/ui/world-map";

const routes = [
  {
    start: { lat: -40, lng: -160.3657 }, // Morocco
    end: { lat: 57.0097, lng: -120.5479 }, // Paris
  },
  {
    start: { lat: 57.0097, lng: -120.5479 }, // Paris
    end: { lat: -78.7917, lng: 105 }, // Dubai
  },
];

export function Map() {
  const [dots, setDots] = useState<typeof routes>([]);

  useEffect(() => {
    const timeouts = routes.map(
      (route, i) =>
        setTimeout(() => {
          setDots((prev) => [...prev, route]);
        }, i * 1000)
    );

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="bg-white w-full">
      <WorldMap dots={dots} />
    </div>
  );
}
