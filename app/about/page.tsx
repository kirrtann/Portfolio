"use client";

import { motion } from "framer-motion";
export default function About() {
  return (
    <>
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <motion.div
            className="group relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300">
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Hi! I'm{" "}
                  <span className="text-green-400 font-semibold">
                    Kirtan Sonagra
                  </span>
                  , a passionate frontend developer who loves creating
                  beautiful, functional, and user-centric web experiences. My
                  journey began during my diploma studies, where I discovered
                  the magic of transforming ideas into interactive digital
                  realities.
                </p>

                <p className="text-lg">
                  Currently pursuing a{" "}
                  <span className="text-blue-400 font-semibold">
                    B.Tech in Information Technology
                  </span>
                  at Silver Oak University while working as a Frontend Developer
                  Intern at
                  <span className="text-green-400 font-semibold">
                    {" "}
                    SolGuruz LLP
                  </span>
                  . I specialize in React.js and Next.js, focusing on clean
                  code, accessibility, and cutting-edge design patterns.
                </p>

                <p className="text-lg">
                  When I'm not coding, you'll find me exploring the latest web
                  technologies, contributing to open-source projects, or
                  brainstorming the next big idea. I believe in continuous
                  learning and pushing the boundaries of what's possible on the
                  web.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
