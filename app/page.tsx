import Link from "next/link";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  LinkedinIcon,
} from "lucide-react";
import { tech } from "./common/options";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Kirtan
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              A passionate{" "}
              <span className="font-semibold text-blue-600">
                Frontend Developer
              </span>{" "}
              crafting beautiful, responsive web experiences with React.js and
              Next.js
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/projects"
              className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              <Code className="mr-2 h-5 w-5" />
              View My Work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-slate-300 bg-transparent hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition-colors"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Link
              href="https://github.com/kirrtann"
              target="_blank"
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              <LinkedinIcon className="h-6 w-6" />
            </Link>
            <Link
              href="https://github.com/kirtansonagra"
              target="_blank"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:kirtansonagra313@gmail.com"
              className="text-slate-600 hover:text-red-600 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Experience */}
            <div className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow rounded-lg">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-slate-900">
                    Experience
                  </h2>
                </div>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Frontend Developer Intern
                    </h3>
                    <p className="text-blue-600 font-medium">SolGuruz LLP</p>
                    <p className="text-sm text-slate-500 mb-2">2024 - 2025</p>
                    <p className="text-slate-600">
                      Worked on real-world frontend projects using React.js and
                      Next.js. Collaborated with senior developers to build
                      responsive web applications and gained hands-on experience
                      with modern development practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow rounded-lg">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <GraduationCap className="h-8 w-8 text-indigo-600 mr-3" />
                  <h2 className="text-2xl font-bold text-slate-900">
                    Education
                  </h2>
                </div>
                <div className="space-y-6">
                  <div className="border-l-4 border-indigo-600 pl-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      B.Tech Information Technology
                    </h3>
                    <p className="text-indigo-600 font-medium">
                      Silver Oak University
                    </p>
                    <p className="text-sm text-slate-500">2023 - 2026</p>
                  </div>
                  <div className="border-l-4 border-slate-300 pl-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Diploma in Information Technology
                    </h3>
                    <p className="text-slate-600 font-medium">
                      Government Polytechnic Gandhinagar
                    </p>
                    <p className="text-sm text-slate-500">2020 - 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            Technologies I Work With
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tech.map((skill) => (
              <div
                key={skill}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
              >
                <p className="font-medium text-slate-800">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            I'm always excited to work on new projects and collaborate with
            fellow developers.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-colors"
          >
            Start a Conversation
            <ExternalLink className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
