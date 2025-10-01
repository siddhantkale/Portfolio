import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-2xl font-semibold text-gray-800 dark:text-white">
        Siddhant Kale
      </div>
      <div className="flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-200">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/projects" className="hover:underline">Projects</Link>
        <Link href="/resume" className="hover:underline">Resume</Link>
        <button onClick={toggleTheme} className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
}
