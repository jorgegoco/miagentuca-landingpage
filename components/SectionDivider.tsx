import React from "react"

interface SectionDividerProps {
  fromColor?: "navy" | "white" | "slate"
  toColor?: "navy" | "white" | "slate"
  variant?: "gradient" | "wave" | "dots"
}

const SectionDivider: React.FC<SectionDividerProps> = ({
  fromColor = "navy",
  toColor = "white",
  variant = "gradient",
}) => {
  const getGradientClasses = () => {
    const colorMap = {
      navy: "rgb(15, 23, 42)", // navy-900
      white: "rgb(255, 255, 255)",
      slate: "rgb(248, 250, 252)", // slate-50
    }

    return `linear-gradient(to bottom, ${colorMap[fromColor]}, ${colorMap[toColor]})`
  }

  if (variant === "gradient") {
    return (
      <div
        className="w-full h-24 relative overflow-hidden"
        style={{ background: getGradientClasses() }}
      >
        {/* Decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-electric-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>
    )
  }

  if (variant === "wave") {
    const waveColor = toColor === "navy" ? "rgb(15, 23, 42)" : toColor === "slate" ? "rgb(248, 250, 252)" : "rgb(255, 255, 255)"

    return (
      <div className="relative w-full h-24" style={{ backgroundColor: fromColor === "navy" ? "rgb(15, 23, 42)" : fromColor === "slate" ? "rgb(248, 250, 252)" : "rgb(255, 255, 255)" }}>
        <svg
          className="absolute bottom-0 w-full h-24"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C240,100 480,100 720,64 C960,28 1200,28 1440,64 L1440,120 L0,120 Z"
            fill={waveColor}
          />
        </svg>
      </div>
    )
  }

  if (variant === "dots") {
    return (
      <div
        className="w-full h-16 relative"
        style={{ background: getGradientClasses() }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(56, 189, 248, 0.3) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>
    )
  }

  return null
}

export default SectionDivider
