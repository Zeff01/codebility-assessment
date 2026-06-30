import WeatherWidget from "@/components/WeatherWidget";
import FinanceWidget from "@/components/FinanceWidget";

export default function DashboardPage() {
  const now = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Dashboard
            </h1>
            <p className="text-sm text-zinc-400 mt-0.5">{now}</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
            Live data
          </div>
        </div>

        {/* Widget grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <WeatherWidget />
          <FinanceWidget />
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-xs text-zinc-400">
          Weather via Open-Meteo · Markets via simulated data (Finnhub in production)
        </p>
      </div>
    </main>
  );
}
