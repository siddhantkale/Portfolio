import { motion } from 'framer-motion';

export default function ResumePage() {
  return (
    <motion.div
      className="min-h-screen px-6 py-12 text-gray-800 dark:text-white bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold">📝 Resume Upload (Coming Soon)</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          This page will allow users to upload their resumes, extract skills using AI, and get personalized job role recommendations based on their experience and strengths.
        </p>

        <div className="rounded-lg border border-dashed border-gray-400 dark:border-gray-600 p-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Resume Upload & AI Matching functionality will be added in Phase 2.
          </p>
        </div>

        <ul className="list-disc pl-6 text-sm text-gray-600 dark:text-gray-400">
          <li>🧠 NLP-based Resume Parsing</li>
          <li>📄 Skill Extraction using SpaCy/BERT</li>
          <li>💼 Role Recommendations from ML Backend</li>
          <li>📊 Dynamic Match Scores</li>
        </ul>

        <p className="text-sm text-gray-400 pt-4">
          Stay tuned! You’ll soon be able to upload your PDF resume and get smart job matches.
        </p>
      </div>
    </motion.div>
  );
}
