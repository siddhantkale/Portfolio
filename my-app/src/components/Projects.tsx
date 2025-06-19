'use client';

import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Automated Expert Selection for Interview Boards',
    duration: 'Oct 2024 – Feb 2025',
    description:
      'Expert matching system aligning interviewers’ expertise with candidates. Implemented OCR, NLP, fuzzy matching, and scoring logic.',
    tech: ['React.js', 'Express.js', 'MongoDB', 'Cloudinary', 'JWT', 'Python', 'OCR', 'NLP'],
    link: 'https://github.com/Sagarr2004/Capstone',
  },
  {
    title: 'Restaurant Full-Stack Website',
    duration: 'May 2024 – June 2024',
    description:
      'Responsive MERN stack restaurant platform with dynamic menu, feedback, and order tracking.',
    tech: ['React.js', 'Express.js', 'MongoDB', 'JWT', 'Cloudinary'],
    link: 'https://github.com/Sagarr2004/Restaurant',
  },
  {
    title: 'Jagruti – Child Rights Awareness Platform',
    duration: 'Jan 2024 – May 2024',
    description:
      'Interactive platform to promote legal literacy through gamified quizzes and informative content.',
    tech: ['HTML', 'CSS', 'JavaScript', 'MongoDB'],
    link: 'https://github.com/SnehalShete37/JAGRUTI',
  },
];

export default function Projects() {
  return (
    <section className="space-y-10 pt-12">
      <motion.h2
        className="text-3xl font-bold text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        🚀 Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-300 mb-5"
          >
            <div className="flex justify-between items-start mb-10">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{project.duration}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-800 dark:text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
