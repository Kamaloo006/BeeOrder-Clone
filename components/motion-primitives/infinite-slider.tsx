"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { useMotionValue, animate, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import useMeasure from "react-use-measure";

export type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
  pauseOnHover?: boolean;
};

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 50,
  speedOnHover,
  direction = "horizontal",
  reverse = false,
  className,
  pauseOnHover = false,
}: InfiniteSliderProps) {
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const animationRef = useRef<ReturnType<typeof animate>>();
  const childrenArray = React.Children.toArray(children);
  const isHorizontal = direction === "horizontal";

  useEffect(() => {
    if (!width && !height) return;

    const size = isHorizontal ? width : height;
    const contentSize = size / 2 + gap; // Only need half since we duplicate content
    const from = reverse ? -contentSize : 0;
    const to = reverse ? 0 : -contentSize;

    const animateSlider = () => {
      animationRef.current = animate(translation, [from, to], {
        ease: "linear",
        duration: contentSize / currentSpeed,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
        onRepeat: () => {
          // Reset position without visual jump
          translation.set(from);
        },
      });
    };

    // Stop any existing animation
    animationRef.current?.stop();
    // Start new animation
    animateSlider();

    return () => {
      animationRef.current?.stop();
    };
  }, [width, height, gap, currentSpeed, direction, reverse]);

  const handleHoverStart = () => {
    if (pauseOnHover) {
      animationRef.current?.pause();
    } else if (speedOnHover) {
      setCurrentSpeed(speedOnHover);
    }
  };

  const handleHoverEnd = () => {
    if (pauseOnHover) {
      animationRef.current?.play();
    } else if (speedOnHover) {
      setCurrentSpeed(speed);
    }
  };

  return (
    <div className={cn("overflow-hidden relative", className)}>
      <motion.div
        className="flex w-max"
        style={{
          [isHorizontal ? "x" : "y"]: translation,
          gap: `${gap}px`,
          flexDirection: isHorizontal ? "row" : "column",
        }}
        ref={ref}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
      >
        {childrenArray}
        {childrenArray}
      </motion.div>

      {/* Gradient fade effect for smoother visual */}
      <div
        className={`absolute inset-y-0 left-0 w-16  pointer-events-none ${
          !isHorizontal && "hidden"
        }`}
      />
      <div
        className={`absolute inset-y-0 right-0 w-16  pointer-events-none ${
          !isHorizontal && "hidden"
        }`}
      />
    </div>
  );
}
