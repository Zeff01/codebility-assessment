import Link from "next/link";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="p-15 min-h-screen bg-zinc-50 font-sans dark:bg-black flex flex-col">
        <Link href="/">
          <div className="flex gap-3 text-5xl text-red-950">
            <h1 className="first-letter:font-bold">A</h1>
            <h1 className="first-letter:font-bold">BLOG'S</h1>
            <h1 className="first-letter:font-bold">COLLECTION</h1>
          </div>
          <p>[ my blog posts ]</p>
        </Link>

        <div className="flex-1">{children}</div>

        <div className="mt-10">
          <Link href="/" className="hover:font-bold">
            &gt;&gt; Return to home
          </Link>
        </div>
      </div>
    </div>
  );
}
