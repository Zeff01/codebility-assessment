import Header from "./components/Header"
import Hero from "./components/Hero"
import GiftCard from "./components/GiftCards"

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen flex flex-col items-center ">
      <Header />
      <main className="flex-1 w-[1000px] max-[1000px]:w-full flex flex-col gap-10 justify-center p-2">
        <Hero />
        <GiftCard />
      </main>
    </div>
  )
}
