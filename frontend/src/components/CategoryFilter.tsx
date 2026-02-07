export default function CategoryFilter({
  categories,
  active,
  setActive,
}: {
  categories: string[];
  active: string;
  setActive: (v: string) => void;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      <button
        onClick={() => setActive("all")}
        className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
          active === "all"
            ? "bg-red-600 text-white"
            : "bg-white border"
        }`}
      >
        All
      </button>

      {categories.map((c) => (
        <button
          key={c}
          onClick={() => setActive(c)}
          className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
            active === c
              ? "bg-red-600 text-white"
              : "bg-white border"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
