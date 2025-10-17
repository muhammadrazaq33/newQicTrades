import type { ComponentType } from "react";
import { motion, Transition, useSpring } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";

const spring = {
  type: "spring",
  stiffness: 70,
  damping: 30,
};

export function withHover(Component: ComponentType<any>): ComponentType<any> {
  const WrappedComponent = (props: any) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [rotateXaxis, setRotateXaxis] = useState(0);
    const [rotateYaxis, setRotateYaxis] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    const dx = useSpring(0, spring);
    const dy = useSpring(0, spring);

    useEffect(() => {
      dx.set(-rotateXaxis);
      dy.set(rotateYaxis);
    }, [dx, dy, rotateXaxis, rotateYaxis]);

    const handleMouseMove = (event: React.MouseEvent) => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const mouseX = event.clientX - rect.left - centerX;
      const mouseY = event.clientY - rect.top - centerY;

      const degreeX = (mouseY / centerY) * 10;
      const degreeY = (mouseX / centerX) * 10;

      setRotateXaxis(degreeX);
      setRotateYaxis(degreeY);
    };

    const handleMouseLeave = () => {
      setRotateXaxis(0);
      setRotateYaxis(0);
      setIsFlipped(false);
    };

    const handleMouseEnter = () => {
      setIsFlipped(true);
    };

    return (
      <motion.div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: "1200px",
          width: props.width || "100%",
          height: props.height || "100%",
        }}
      >
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          transition={spring as Transition}
          style={{
            width: "100%",
            height: "100%",
            transformStyle: "preserve-3d",
            rotateX: dx,
            rotateY: dy,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              transformStyle: "preserve-3d",
            }}
          >
            <motion.div
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={spring as Transition}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backfaceVisibility: "hidden",
              }}
            >
              <Component {...props} variant="Front" />
            </motion.div>

            <motion.div
              animate={{ rotateY: isFlipped ? 0 : -180 }}
              transition={spring as Transition}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <Component {...props} variant="Back" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  // Set a display name for easier debugging
  WrappedComponent.displayName = `withHover(${Component.displayName || Component.name || "Component"})`;

  return WrappedComponent;
}