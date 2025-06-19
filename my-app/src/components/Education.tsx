'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const education = [
  {
    type: 'Education',
    icon: <FaGraduationCap className="text-blue-600 dark:text-blue-400 w-5 h-5" />,
    title: 'B.Tech in Computer Science & Business Systems',
    institution: "JSPM's Rajarshi Shahu College of Engineering, Pune",
    details: 'CGPA: 9.16 | Expected: May 2025',
  },
];

const certifications = [
  {
    type: 'Certification',
    icon: <FaCertificate className="text-yellow-500 w-5 h-5" />,
    title: 'AWS Certified Solution Architect Associate',
    institution: 'GeekforGeeks',
    details: 'Completed: May 2025',
  },
  {
    type: 'Certification',
    icon: <FaCertificate className="text-yellow-500 w-5 h-5" />,
    title: 'Frontend Development',
    institution: 'Great Learning',
    details: 'Completed: Feb 2023',
  },
  {
    type: 'Certification',
    icon: <FaCertificate className="text-yellow-500 w-5 h-5" />,
    title: 'Basics of OOP',
    institution: 'Self-Learning',
    details: 'Completed: Mar 2023',
  },
];

const TimelineItem = ({ item }: { item: any }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="relative pl-8 pb-6 border-l-2 border-gray-200 dark:border-gray-700"
  >
    <div className="absolute -left-[13px] bg-white dark:bg-gray-900 rounded-full p-1 border border-gray-300 dark:border-gray-600">
      {item.icon}
    </div>
    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{item.title}</h4>
    <p className="text-sm text-gray-500 dark:text-gray-400">{item.institution}</p>
    <p className="text-sm text-gray-600 dark:text-gray-300">{item.details}</p>
  </motion.div>
);

export default function Education() {
  return (
    <section className="mt-12 space-y-10">
      <motion.h2
        className="text-3xl font-bold text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        🎓 Education & Certifications
      </motion.h2>

      <div className="space-y-6">
        {education.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </div>

      <div className="space-y-6">
        {certifications.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
}
