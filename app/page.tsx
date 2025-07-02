"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Code,
  Briefcase,
  GraduationCap,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { tech, social } from "./common/options";
import ParticleBackground from "./common/particle-background";
import FloatingElements from "./common/floating-elements";

import Navbar from "./navbar/page";
import Projects from "./projects/page";
import About from "./about/page";
import ContactForm from "./contact/page";
import CodeRainBackground from "./common/code-rain-background";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="relative  bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      <ParticleBackground />
      <CodeRainBackground />
      <FloatingElements />
      <Navbar />

      {/* Enhanced Cursor follower */}
      <motion.div
        className="fixed w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          className="max-w-6xl mx-auto text-center z-10"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div
              className="inline-block mb-6"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Sparkles className="w-12 h-12 text-green-400 mx-auto mb-4" />
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Hi, I'm Kirtan
              </span>
            </motion.h1>

            <motion.div className="relative" variants={itemVariants}>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                A passionate{" "}
                <motion.span
                  className="font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  Frontend Developer
                </motion.span>{" "}
                crafting extraordinary digital experiences with cutting-edge
                technologies
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#projects"
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300"
              >
                <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Code className="mr-2 h-5 w-5 relative z-10" />
                <span className="relative z-10">View My Work</span>
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.2, 0],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#contact"
                className="group inline-flex items-center px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-full hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-8 mb-12"
          >
            {social.map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  className={`text-gray-400 ${social.color} transition-all duration-300`}
                >
                  <social.icon className="h-8 w-8" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            My Journey
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Experience */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <motion.div
                    className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl mr-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Briefcase className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">Experience</h3>
                </div>

                <div className="space-y-6">
                  <div className="relative pl-6 border-l-2 border-green-400">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-green-400 rounded-full" />
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Frontend Developer Intern
                    </h4>
                    <p className="text-green-400 font-medium mb-1">
                      SolGuruz LLP
                    </p>
                    <p className="text-sm text-gray-400 mb-3">
                      (Nov 2024 - Present)
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Worked on real-world frontend projects using React.js and
                      Next.js. Collaborated with senior developers to build
                      responsive web applications.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <motion.div
                    className="p-3 bg-gradient-to-r from-blue-600 to-purple-500 rounded-xl mr-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <GraduationCap className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                </div>

                <div className="space-y-6">
                  <div className="relative pl-6 border-l-2 border-blue-400">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-400 rounded-full" />
                    <h4 className="text-lg font-semibold text-white mb-1">
                      B.Tech Information Technology
                    </h4>
                    <p className="text-blue-400 font-medium mb-1">
                      Silver Oak University
                    </p>
                    <p className="text-sm text-gray-400">2023 - 2026</p>
                  </div>

                  <div className="relative pl-6 border-l-2 border-gray-500">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-500 rounded-full" />
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Diploma in Information Technology
                    </h4>
                    <p className="text-gray-400 font-medium mb-1">
                      Government Polytechnic Gandhinagar
                    </p>
                    <p className="text-sm text-gray-400">2020 - 2023</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Technologies I Learn
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tech.map((skill, index) => (
              <motion.div
                key={skill}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-600/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 text-center hover:border-green-400/50 transition-all duration-300">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Zap className="w-6 h-6 text-white" />
                  </motion.div>
                  <p className="font-semibold text-white">{skill}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactForm />
      </section>
    </div>
  );
}
