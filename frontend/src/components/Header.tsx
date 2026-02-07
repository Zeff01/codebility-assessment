export default function Header() {
  return (
    <header className="bg-red-800 border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-white">
          RedCart
        </h1>

        <button className="relative px-4 py-2 rounded-xl bg-white text-red-600 text-sm font-medium transition">
          Cart
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-2">
            0
          </span>
        </button>
      </div>
    </header>
  );
}
