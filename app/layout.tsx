import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';

export const metadata: Metadata = {
  title: 'Dashboard App',
  description: 'Clean Next.js App Template',
};

const themeScript = `
  let theme = window.localStorage.getItem('theme') || 'system';
  if (theme === 'system') {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.documentElement.classList.add(theme);
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100">
        <ThemeProvider>
          {children}

          {/* Temporary Theme Toggle for Testing */}
          <div className="fixed bottom-6 right-6 z-[100] rounded-full shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
