export default function Header() {
  return (
    <header className="bg-white/10 backdrop-blur-md border-b border-white/20 
                       sticky top-0 z-50 p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Nhoriel Balenzua</h1>
        <p className="text-gray-300 text-sm">Random Posts & Insights</p>
      </div>
    </header>
  );
}
