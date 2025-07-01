import Link from "next/link";
import { ExternalLink, Github, Globe } from "lucide-react";
import Image from "next/image";
import { projects } from "../common/options";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A collection of projects I've worked on, showcasing my skills in
            frontend development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Featured Projects
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <div
                  key={project.id}
                  className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group rounded-lg"
                >
                  <div className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                      >
                        <Globe className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        className="inline-flex items-center px-4 py-2 border border-slate-300 bg-transparent hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg transition-colors"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Other Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((project) => !project.featured)
              .map((project) => (
                <div
                  key={project.id}
                  className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group rounded-lg"
                >
                  <div className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={200}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-slate-300 bg-transparent hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg transition-colors"
                      >
                        <ExternalLink className="mr-1 h-3 w-3" />
                        View
                      </Link>
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-slate-300 bg-transparent hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg transition-colors"
                      >
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-white/50 rounded-2xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-slate-600 mb-6">
            I'm always open to discussing new opportunities and exciting
            projects.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-colors"
          >
            Get In Touch
            <ExternalLink className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
