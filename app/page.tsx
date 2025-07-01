import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#1e1e1e] text-white font-mono p-6">
      <div className="max-w-3xl mx-auto border border-[#333] rounded-lg bg-[#1e1e1e] shadow-lg p-6">
        <div className="text-green-400 text-xl mb-1">&lt;!DOCTYPE html&gt;</div>
        <div className="text-blue-400 text-xl mb-1">&lt;html&gt;</div>
        <div className="ml-4">
          <div className="text-blue-400">&lt;head&gt;</div>
          <div className="ml-4 text-purple-400">
            &lt;title&gt;Kirtan Sonagra - Frontend Developer&lt;/title&gt;
          </div>
          <div className="text-blue-400">&lt;/head&gt;</div>

          <div className="text-blue-400 mt-4">&lt;body&gt;</div>

          <section className="ml-4 mt-4">
            <p className="text-yellow-400">// Kirtan Sonagra</p>

            <div className="text-green-400 mt-4">&lt;experience&gt;</div>
            <div className="ml-4">
              <p className="text-white">
                Internship | <span className="text-blue-300">SolGuruz LLP</span>{" "}
                (2024 - 2025)
              </p>
              <p className="text-gray-400 text-sm ml-4">
                Worked on real-world frontend tasks using React.js and Next.js.
              </p>
            </div>
            <div className="text-green-400 mt-1">&lt;/experience&gt;</div>

            <div className="text-green-400 mt-4">&lt;education&gt;</div>
            <div className="ml-4">
              <div className="mb-2">
                <p className="text-white">
                  Silver Oak University (2023 - 2026)
                </p>
                <p className="text-gray-400 text-sm ml-4">
                  B.Tech in Information Technology
                </p>
              </div>
              <div>
                <p className="text-white">
                  Government Polytechnic Gandhinagar (2020 - 2023)
                </p>
                <p className="text-gray-400 text-sm ml-4">
                  Diploma in Information Technology
                </p>
              </div>
            </div>
            <div className="text-green-400 mt-1">&lt;/education&gt;</div>

            <div className="text-green-400 mt-4">&lt;contact&gt;</div>
            <ul className="ml-4 text-blue-300 underline">
              <li>
                <Link href="tel:+919974033593">9974033593</Link>
              </li>
              <li>
                <Link href="mailto:kirtansonagra313@gmail.com">
                  kirtansonagra313@gmail.com
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com/in/kirtan-sonagra"
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </li>
              {/* Add GitHub or Portfolio Link if needed */}
            </ul>
            <div className="text-green-400 mt-1">&lt;/contact&gt;</div>
          </section>

          <div className="text-blue-400 mt-4">&lt;/body&gt;</div>
        </div>
        <div className="text-blue-400 text-xl">&lt;/html&gt;</div>
      </div>
    </main>
  );
}
