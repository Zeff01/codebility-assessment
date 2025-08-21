import Header from "./_components/Header"

export const anim = (variants) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  }
}

export default function BlogLayout({ children }) {
  return (
    <div className="min-h-screen max-w-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        {children}
      </main>
    </div>
  )
}
