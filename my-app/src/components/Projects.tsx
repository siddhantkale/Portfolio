'use client';

import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'LeetCode Reminder & Tracker',
    duration: '2025',
    description:
      'Full-stack automation tool to track LeetCode progress and send daily problem reminders via scheduled cron jobs. Integrated LeetCode’s unofficial API for real-time problem data and automated solved-problem tracking with GitHub Actions.',
    tech: ['Python', 'Selenium', 'Node.js', 'MongoDB', 'GitHub Actions', 'Nodemailer'],
    link: 'https://github.com/siddhantkale/LeetCodeReminder', 
  },
  {
    title: 'Price Comparison Web App',
    duration: '2025',
    description:
      'Web app to compare real-time product prices across Amazon and Flipkart using web scraping. Built with Flask backend and Jinja2 templating to display sorted results in a user-friendly format.',
    tech: ['Python', 'Flask', 'BeautifulSoup (BS4)', 'Jinja2', 'HTML', 'CSS'],
    link: 'https://github.com/siddhantkale/scrapeit', 
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
