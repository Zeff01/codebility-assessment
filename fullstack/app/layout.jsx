import './globals.css';

export const metadata = {
  title: 'Fullstack Assessment',
  description: 'A simple blog built with Next.js for fullstack assessment',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
