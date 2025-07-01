"use client";
import { useState } from "react";
import type React from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can integrate with a form service like Formspree, Netlify Forms, etc.
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from
            you!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white/70 backdrop-blur-sm border-0 shadow-lg mb-8 rounded-lg">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Let's Connect
                </h2>
              </div>
              <div className="p-6 pt-0 space-y-6">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-4" />
                  <div>
                    <p className="font-medium text-slate-900">Email</p>
                    <Link
                      href="mailto:kirtansonagra313@gmail.com"
                      className="text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      kirtansonagra313@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-green-600 mr-4" />
                  <div>
                    <p className="font-medium text-slate-900">Phone</p>
                    <Link
                      href="tel:+919974033593"
                      className="text-slate-600 hover:text-green-600 transition-colors"
                    >
                      +91 9974033593
                    </Link>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-red-600 mr-4" />
                  <div>
                    <p className="font-medium text-slate-900">Location</p>
                    <p className="text-slate-600">Gujarat, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/70 backdrop-blur-sm border-0 shadow-lg rounded-lg">
              <div className="p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-6">
                  Follow Me
                </h2>
              </div>
              <div className="p-6 pt-0">
                <div className="flex space-x-4">
                  <Link
                    href="https://linkedin.com/in/kirtan-sonagra"
                    target="_blank"
                    className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://github.com/kirtansonagra"
                    target="_blank"
                    className="flex items-center justify-center w-12 h-12 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link
                    href="mailto:kirtansonagra313@gmail.com"
                    className="flex items-center justify-center w-12 h-12 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/70 backdrop-blur-sm border-0 shadow-lg rounded-lg">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Send Me a Message
                </h2>
              </div>
              <div className="p-6 pt-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full min-h-[120px] px-3 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-colors"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white/50 backdrop-blur-sm border-0 shadow-lg rounded-lg">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Let's Build Something Great Together
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Whether you have a project in mind, need help with development,
                or just want to connect with a fellow developer, I'm always
                excited to hear from new people. Don't hesitate to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
