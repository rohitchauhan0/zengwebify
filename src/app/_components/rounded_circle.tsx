import React from "react";
import { motion } from "framer-motion";

export default function RoundedTextCircle({
  size = 160, // diameter in px
  bgColor = "#000000",
  text = "Together we stand strong, we are with you",
  textColor = "#ffffff",
  className = "",
}) {
  const radius = (size - 20) / 2; // leave some padding
  const cx = size / 2;
  const cy = size / 2;
  const pathId = "circlePath";

  return (
    <motion.div
      className={`inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      aria-label={text}
      role="img"
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle */}
        <circle cx={cx} cy={cy} r={radius} fill={bgColor} stroke="none" />

        {/* Invisible path for text */}
        <defs>
          <path
            id={pathId}
            d={`M ${cx} ${cy - (radius - 20)} 
                a ${radius - 20} ${radius - 20} 0 1 1 0 ${2 * (radius - 20)} 
                a ${radius - 20} ${radius - 20} 0 1 1 0 ${-2 * (radius - 20)}`}
          />
        </defs>

        {/* Text along the top inside edge */}
        <text
          fill={textColor}
          fontSize={Math.max(12, size * 0.06)}
          fontWeight={700}
          style={{ letterSpacing: 1 }}
        >
          <textPath
            href={`#${pathId}`}
            startOffset="52%"
            textAnchor="middle"
          >
            {` ${text} `}
          </textPath>
        </text>
      </svg>
    </motion.div>
  );
}
