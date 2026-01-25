import "./globals.css";

export const metadata = {
  title: "TechJournal",
  description: "Code Ability Fullstack Assessment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
