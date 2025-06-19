import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaCode,
} from "react-icons/fa";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import { Typewriter } from "react-simple-typewriter";
import "@/styles/globals.css";

export default function Home() {
  return (
    <section className="space-y-13 px-6 pt-8">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-20">
        <img
          // src="https://avatars.githubusercontent.com/u/106865018?v=4"
          // src="/profile1.jpg"
          src="/profile.jpeg"
          alt="Sagar Chavan"
          className="w-40 h-40 rounded-full object-cover shadow-md border border-gray-300 dark:border-gray-700"
        />
        <div className="space-y-4 text-center sm:text-left">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            👋 Hi,{" "}
            <span className="text-white-600">
              <Typewriter
                words={[
                  "I'm Sagar Chavan",
                  "I'm a Tech Enthusiast",
                  "I'm a Software Developer",
                  "I'm a Full-Stack Developer",
                  "I'm a Problem Solver",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
            Aspiring Software Engineer with a strong foundation in full-stack
            development, data structures, and cloud technologies. I love
            building scalable, user-centric solutions that solve real-world
            problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 text-gray-700 dark:text-gray-300 justify-center sm:justify-start">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="w-4 h-4" />
              Pune, Maharashtra, India
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="w-4 h-4" />
              <a
                href="mailto:sagarchavan0061@gmail.com"
                className="hover:underline"
              >
                sagarchavan0061@gmail.com
              </a>
            </div>
          </div>

          <div className="flex justify-center sm:justify-start gap-10 pt-1">
            <div className="relative group">
              <a
                href="https://linkedin.com/in/sagar-chavan-65b276257/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-6 h-6 hover:text-blue-600 transition-colors" />
              </a>
              <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                LinkedIn
              </div>
            </div>
            <div className="relative group">
              <a
                href="https://github.com/Sagarr2004"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-6 h-6 hover:text-blue-600 transition-colors" />
              </a>
              <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                Github
              </div>
            </div>
            <div className="relative group">
              <a
                href="https://leetcode.com/u/sagarchavan121/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCode className="w-6 h-6 hover:text-blue-600 transition-colors" />
              </a>
              <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                Leetcode
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <Skills />
      <Education />
      <Achievements />
      <Projects />
    </section>
  );
}
