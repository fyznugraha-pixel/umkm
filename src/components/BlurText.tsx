"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  animateBy?: "word" | "character";
}

export default function BlurText({
  text,
  className = "",
  delay = 0,
  duration = 0.5,
  animateBy = "word",
}: BlurTextProps) {
  const elements = animateBy === "word" ? text.split(" ") : text.split("");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100, duration },
    },
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: 20,
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className={`inline-block ${className}`}
    >
      {elements.map((el, index) => (
        <motion.span 
          variants={child} 
          key={index} 
          className={`inline-block ${animateBy === "word" ? "mr-[0.25em]" : ""}`}
        >
          {el === " " ? "\u00A0" : el}
        </motion.span>
      ))}
    </motion.span>
  );
}
