'use client';

import { motion } from 'framer-motion';
import {
  FaTrophy,
  FaMedal,
  FaBolt,
  FaHackerrank,
  FaCheckCircle,
} from 'react-icons/fa';

const achievements = [
  {
    icon: <FaTrophy className="text-yellow-500 w-5 h-5" />,
    title: '1st Runner-Up – Srujan Project Competition',
    year: '2025',
  },
  {
    icon: <FaMedal className="text-orange-400 w-5 h-5" />,
    title: '2nd Runner-Up – Hack-sphere Hackathon',
    year: '2025',
  },
  {
    icon: <FaBolt className="text-pink-500 w-5 h-5" />,
    title: 'Ranked 6th – Smart India Hackathon (SIH)',
    year: '2024',
  },
  {
    icon: <FaCheckCircle className="text-green-500 w-5 h-5" />,
    title: 'Finalist – Inspiron 4.0 (CSI COEP)',
    year: '2025',
  },
  {
    icon: <FaHackerrank className="text-purple-500 w-5 h-5" />,
    title: 'Solved 200+ DSA Problems on LeetCode',
    year: 'Ongoing',
  },
];

export default function Achievements() {
  return (
    <section className="mt-12 space-y-10">
      <motion.h2
        className="text-3xl font-bold text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        🏆 Achievements
      </motion.h2>

      <div className="space-y-4">
        {achievements.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm"
          >
            <div className="mt-1">{item.icon}</div>
            <div>
              <h4 className="text-md font-medium text-gray-800 dark:text-white">{item.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
