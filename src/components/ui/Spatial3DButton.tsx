import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface Spatial3DButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  target?: string;
  rel?: string;
  variant?: "primary" | "outline" | "liquid" | "ghost" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  depth?: number; // translateZ of inner text/icon in px (default 12)
}

export const Spatial3DButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  Spatial3DButtonProps
>(
  (
    {
      href,
      target,
      rel,
      variant = "primary",
      size = "md",
      depth = 12,
      children,
      className,
      onClick,
      disabled,
      ...props
    },
    ref,
  ) => {
    const buttonRef = useRef<HTMLDivElement>(null);
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });
    const [isPressed, setIsPressed] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
      if (typeof window !== "undefined") {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReducedMotion(mq.matches);
        const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
        mq.addEventListener("change", listener);
        return () => mq.removeEventListener("change", listener);
      }
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled || reducedMotion || !buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Max 10 deg rotation
      const rotateX = ((y - centerY) / centerY) * -9;
      const rotateY = ((x - centerX) / centerX) * 9;

      setRotate({ x: rotateX, y: rotateY });
      setSpotlight({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: 0.35,
      });
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setIsPressed(false);
      setRotate({ x: 0, y: 0 });
      setSpotlight((prev) => ({ ...prev, opacity: 0 }));
    };

    const sizeClasses = {
      sm: "h-9 px-4 text-xs rounded-full",
      md: "h-11 px-6 text-sm rounded-full",
      lg: "h-12 px-7 text-sm sm:text-base rounded-full",
    };

    const variantClasses = {
      primary:
        "bg-white text-zinc-950 font-semibold shadow-[0_10px_25px_-5px_rgba(255,255,255,0.2),0_15px_35px_-5px_rgba(0,0,0,0.6)] border border-white/40 hover:bg-zinc-100",
      outline:
        "apple-glass text-white font-medium border border-white/20 shadow-[0_12px_30px_-8px_rgba(0,0,0,0.7)] hover:border-white/40 hover:bg-white/10",
      liquid:
        "bg-gradient-to-b from-white/20 via-white/5 to-white/10 text-white font-medium border border-white/30 backdrop-blur-2xl shadow-[0_15px_35px_-10px_rgba(56,189,248,0.25),0_10px_30px_rgba(0,0,0,0.8)] hover:border-sky-400/50 hover:shadow-[0_15px_40px_-5px_rgba(56,189,248,0.4)]",
      secondary:
        "bg-white/10 text-zinc-200 font-medium border border-white/10 hover:bg-white/15 hover:text-white shadow-lg",
      ghost: "bg-transparent text-zinc-300 font-medium hover:text-white hover:bg-white/5",
    };

    // Calculate dynamic 3D shadow offset matching rotation
    const shadowOffset =
      !reducedMotion && isHovered
        ? `${-rotate.y * 1.8}px ${rotate.x * 1.8 + 12}px 30px rgba(0,0,0,0.65)`
        : "0 10px 25px rgba(0,0,0,0.4)";

    const containerStyle: React.CSSProperties = reducedMotion
      ? {}
      : {
          perspective: "600px",
          transformStyle: "preserve-3d",
          transform: `perspective(600px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) ${
            isPressed
              ? "scale(0.97) translateZ(-4px)"
              : isHovered
                ? "translateZ(4px)"
                : "translateZ(0)"
          }`,
          boxShadow: shadowOffset,
          transition: isHovered
            ? "transform 0.08s ease-out, box-shadow 0.15s ease-out"
            : "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s ease-out",
        };

    const innerContentStyle: React.CSSProperties = reducedMotion
      ? {}
      : {
          transform: `translateZ(${isPressed ? 2 : isHovered ? depth : 0}px)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
        };

    const commonClasses = cn(
      "relative inline-flex items-center justify-center select-none cursor-pointer overflow-hidden transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 disabled:pointer-events-none disabled:opacity-50",
      sizeClasses[size],
      variantClasses[variant],
      className,
    );

    const innerElements = (
      <>
        {/* Dynamic Specular Sheen Layer that follows cursor */}
        {!reducedMotion && (
          <div
            className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-200 z-10"
            style={{
              opacity: spotlight.opacity,
              background: `radial-gradient(circle 140px at ${spotlight.x}% ${spotlight.y}%, rgba(255, 255, 255, 0.45), transparent 75%)`,
            }}
          />
        )}

        {/* 3D Elevated Label & Icon Container */}
        <span
          className="relative z-20 inline-flex items-center justify-center gap-2 pointer-events-none"
          style={innerContentStyle}
        >
          {children}
        </span>
      </>
    );

    if (href) {
      return (
        <div
          ref={buttonRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          style={containerStyle}
          className="inline-block rounded-full will-change-transform"
        >
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            target={target}
            rel={rel}
            onClick={onClick as React.MouseEventHandler<HTMLAnchorElement> | undefined}
            className={commonClasses}
          >
            {innerElements}
          </a>
        </div>
      );
    }

    return (
      <div
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        style={containerStyle}
        className="inline-block rounded-full will-change-transform"
      >
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          type={props.type || "button"}
          disabled={disabled}
          onClick={onClick}
          className={commonClasses}
          {...props}
        >
          {innerElements}
        </button>
      </div>
    );
  },
);

Spatial3DButton.displayName = "Spatial3DButton";
