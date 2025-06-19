// src/pages/_app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen transition-colors duration-300">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Component {...pageProps} />
        </main>
      </div>
    </ThemeProvider>
  );
}
