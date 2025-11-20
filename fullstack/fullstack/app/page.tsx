import { Header } from "@/components/header";
import { Content } from "@/components/content";
import { Footer } from "@/components/footer";


export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Content />
      </main>
      <Footer />
    </div>
  );
}
