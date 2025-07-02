"use client";
import { motion } from "framer-motion";
import {
  Code,
  Terminal,
  Cpu,
  Database,
  GitBranch,
  Brackets,
  FileCode,
  Bug,
  Zap,
  Coffee,
} from "lucide-react";

const FloatingElements = () => {
  const elements = [
    { icon: Code, color: "text-green-400", delay: 0 },
    { icon: Terminal, color: "text-blue-400", delay: 0.5 },
    { icon: Cpu, color: "text-purple-400", delay: 1 },
    { icon: Database, color: "text-orange-400", delay: 1.5 },
    { icon: GitBranch, color: "text-red-400", delay: 2 },
    { icon: Brackets, color: "text-yellow-400", delay: 2.5 },
    { icon: FileCode, color: "text-pink-400", delay: 3 },
    { icon: Bug, color: "text-red-500", delay: 3.5 },
    { icon: Zap, color: "text-cyan-400", delay: 4 },
    { icon: Coffee, color: "text-amber-600", delay: 4.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {elements.map((Element, index) => (
        <motion.div
          key={index}
          className={`absolute ${Element.color} opacity-20`}
          initial={{
            x:
              Math.random() *
              (typeof window !== "undefined" ? window.innerWidth : 1200),
            y:
              Math.random() *
              (typeof window !== "undefined" ? window.innerHeight : 800),
            scale: 0,
            rotate: 0,
          }}
          animate={{
            y: [null, -30, 30, -30],
            x: [null, 20, -20, 20],
            rotate: [0, 360, -360, 0],
            scale: [0.3, 1.2, 0.3, 1.2],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            delay: Element.delay,
            ease: "easeInOut",
          }}
          style={{
            left: `${5 + index * 9}%`,
            top: `${5 + index * 8}%`,
          }}
        >
          <Element.icon className="w-8 h-8" />
        </motion.div>
      ))}

      {/* Binary code floating elements */}
      {Array.from({ length: 15 }).map((_, index) => (
        <motion.div
          key={`binary-${index}`}
          className="absolute text-green-300 opacity-10 font-mono text-sm"
          initial={{
            x:
              Math.random() *
              (typeof window !== "undefined" ? window.innerWidth : 1200),
            y:
              Math.random() *
              (typeof window !== "undefined" ? window.innerHeight : 800),
            opacity: 0,
          }}
          animate={{
            y: [null, -100],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: index * 0.5,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${100 + Math.random() * 20}%`,
          }}
        >
          {Math.random() > 0.5 ? "1010" : "0101"}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
