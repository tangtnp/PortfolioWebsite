import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Portfolio',
  description: 'My Portfolio with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-text">
        {/* Header */}
        <header className="p-4 bg-gray-900 text-white flex justify-between items-center sticky top-0 z-50 shadow-md h-16">
          {/* Left side: Your name as a link */}
          <Link
            href="/"
            className="text-3xl font-bold bg-gradient-to-r from-gray-400 to-gray-200 text-transparent bg-clip-text tracking-wide"
          >
            Tanathorn
          </Link>

          {/* Right side: Navigation links */}
          <nav className="flex gap-6">
            <Link href="/projects" className="hover:text-gray-300">
              Projects
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              About Me
            </Link>
          </nav>
        </header>

        {/* Main content */}
        <div className="mt-16">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
