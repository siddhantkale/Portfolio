'use client';

import { motion } from 'framer-motion';

const skills: Record<string, string[]> = {
  Languages: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript'],
  Frontend: ['React.js', 'Next.js', 'Tailwind CSS'],
  Backend: ['Node.js', 'Flask', 'Express.js', 'Django'],
  Databases: ['MongoDB', 'MySQL', 'PostgreSQL'],
  Tools: ['Git', 'GitHub', 'Linux', 'Postman', 'REST APIs', 'GraphQL', 'JWT', 'GitHub Actions'],
  Core: ['Data Structures and Algorithms', 'OOP'],
};


export default function Skills() {
  return (
    <section className="mt-12 space-y-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-gray-800 dark:text-white"
      >
        🛠 Skills
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-5 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm bg-white dark:bg-gray-900 hover:shadow-md transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-3">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-200 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
