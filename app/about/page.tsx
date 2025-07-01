import { Code, Heart, Lightbulb, Target, Coffee, Music } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Story */}
          <div className="lg:col-span-2">
            <div className="bg-white/70 backdrop-blur-sm border-0 shadow-lg h-full rounded-lg">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  My Story
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Hi! I'm Kirtan Sonagra, a passionate frontend developer with
                    a love for creating beautiful, functional web experiences.
                    My journey into web development started during my diploma
                    studies, where I discovered the magic of turning ideas into
                    interactive digital experiences.
                  </p>
                  <p>
                    Currently pursuing my B.Tech in Information Technology at
                    Silver Oak University, I've had the incredible opportunity
                    to work as a Frontend Developer Intern at SolGuruz LLP,
                    where I've been able to apply my skills on real-world
                    projects and learn from experienced developers.
                  </p>
                  <p>
                    I specialize in React.js and Next.js, and I'm constantly
                    exploring new technologies and best practices to stay at the
                    forefront of web development. I believe in writing clean,
                    maintainable code and creating user experiences that are
                    both beautiful and accessible.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Facts */}
          <div>
            <div className="bg-white/70 backdrop-blur-sm border-0 shadow-lg rounded-lg">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Quick Facts
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Code className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-slate-600">2+ years coding</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-slate-600">Frontend focused</span>
                  </div>
                  <div className="flex items-center">
                    <Lightbulb className="h-5 w-5 text-yellow-600 mr-3" />
                    <span className="text-slate-600">Always learning</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="h-5 w-5 text-red-600 mr-3" />
                    <span className="text-slate-600">Love clean code</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values & Interests */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* What I Value */}
          <div className="bg-white/70 backdrop-blur-sm border-0 shadow-lg rounded-lg">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                What I Value
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">
                    Clean Code
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Writing code that's not just functional, but readable and
                    maintainable.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">
                    User Experience
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Creating interfaces that are intuitive, accessible, and
                    delightful to use.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">
                    Continuous Learning
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Staying curious and always looking for ways to improve and
                    grow.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* When I'm Not Coding */}
          <div className="bg-white/70 backdrop-blur-sm border-0 shadow-lg rounded-lg">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                When I'm Not Coding
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Coffee className="h-5 w-5 text-amber-600 mr-3" />
                  <span className="text-slate-600">
                    Exploring new coffee shops
                  </span>
                </div>
                <div className="flex items-center">
                  <Music className="h-5 w-5 text-purple-600 mr-3" />
                  <span className="text-slate-600">Listening to music</span>
                </div>
                <div className="flex items-center">
                  <Code className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-slate-600">
                    Learning new technologies
                  </span>
                </div>
                <div className="flex items-center">
                  <Lightbulb className="h-5 w-5 text-yellow-600 mr-3" />
                  <span className="text-slate-600">
                    Working on side projects
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
