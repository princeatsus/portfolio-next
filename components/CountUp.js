"use client";

import { useEffect, useRef, useState } from "react";

export default function CountUp({ end, suffix = "", duration = 2000 }) {
  const [value, setValue] = useState(0);
  const elementRef = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let frameId;
    let observer;

    const startAnimation = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      const startTime = performance.now();
      const animationDuration = Math.max(0, duration);

      const update = (now) => {
        const progress =
          animationDuration === 0
            ? 1
            : Math.min((now - startTime) / animationDuration, 1);
        const easedProgress = 1 - (1 - progress) ** 3;

        setValue(end * easedProgress);

        if (progress < 1) {
          frameId = requestAnimationFrame(update);
        }
      };

      frameId = requestAnimationFrame(update);
    };

    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        startAnimation();
        observer.disconnect();
      }
    });
    observer.observe(element);

    return () => {
      observer.disconnect();
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [end, duration]);

  return (
    <span ref={elementRef}>
      {Math.round(value).toLocaleString()}
      {suffix}
    </span>
  );
}
