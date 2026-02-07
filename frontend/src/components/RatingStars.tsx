export default function RatingStars({
  rate,
}: {
  rate: number;
}) {
  return (
    <div className="flex text-yellow-400 text-sm">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>
          {i < Math.round(rate) ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}
