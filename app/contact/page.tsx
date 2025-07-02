"use client";
import type React from "react";

import { motion } from "framer-motion";
import SimpleContactForm from "../common/simple-contact-form";
import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
const ContactForm = () => {
  return (
    <>
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <motion.div
              className="lg:col-span-1 space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Let's Connect Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-green-400/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Let's Connect
                  </h3>

                  <div className="space-y-6">
                    <motion.div
                      className="flex items-center group/item"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg mr-4 group-hover/item:scale-110 transition-transform">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Email</p>
                        <Link
                          href="mailto:kirtansonagra313@gmail.com"
                          className="text-gray-300 hover:text-green-400 transition-colors"
                        >
                          kirtansonagra313@gmail.com
                        </Link>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center group/item"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg mr-4 group-hover/item:scale-110 transition-transform">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Phone</p>
                        <Link
                          href="tel:+919974033593"
                          className="text-gray-300 hover:text-green-400 transition-colors"
                        >
                          +91 9974033593
                        </Link>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center group/item"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-2 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg mr-4 group-hover/item:scale-110 transition-transform">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Location</p>
                        <p className="text-gray-300">Ahmedabad, Gujarat</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Social Links Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-6">
                    Follow Me
                  </h3>

                  <div className="flex space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href="https://in.linkedin.com/in/kirtan-sonagra-2b9252239"
                        target="_blank"
                        className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                      >
                        <Linkedin className="h-5 w-5" />
                      </Link>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href="https://github.com/kirrtann"
                        target="_blank"
                        className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-xl hover:from-slate-800 hover:to-slate-900 transition-all duration-300 shadow-lg hover:shadow-slate-500/25"
                      >
                        <Github className="h-5 w-5" />
                      </Link>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href="mailto:kirtansonagra313@gmail.com"
                        className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-red-500/25"
                      >
                        <Mail className="h-5 w-5" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SimpleContactForm />
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Let's Build Something Great Together
                </h3>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Whether you have a project in mind, need help with
                  development, or just want to connect with a fellow developer,
                  I'm always excited to hear from new people. Don't hesitate to
                  reach out!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
