import "./App.css";
import { Navbar } from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import InfrastructureSection from "./components/InfrastructureSection";

function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white font-sans antialiased selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <InfrastructureSection />
      </main>

      <footer className="border-t border-zinc-900 bg-[#060608] py-12 sm:py-16 text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-2.5 justify-center sm:justify-start">
            <div className="w-6 h-6 rounded-lg bg-linear-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white font-bold text-xs">
              ♥
            </div>
            <span className="text-white font-bold">moola</span>
            <span className="ml-1 text-zinc-600">
              © {new Date().getFullYear()} Moola Technologies Inc.
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-zinc-400 font-medium">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#security" className="hover:text-white transition-colors">
              Security
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
