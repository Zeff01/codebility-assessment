interface StockStatusProps {
  inStock: boolean;
}

export default function StockStatus({ inStock }: StockStatusProps) {
  if (inStock) {
    return (
      <div className="bg-green-50 border border-green-200 px-4 py-3 rounded-lg">
        <p className="font-semibold text-green-600">✓ In Stock</p>
        <p className="text-sm text-green-700">Ships within 1-2 business days</p>
      </div>
    );
  }

  return (
    <div className="bg-red-50 border border-red-200 px-4 py-3 rounded-lg">
      <p className="font-semibold text-red-600">Out of Stock</p>
      <p className="text-sm text-red-700">
        This item is currently unavailable
      </p>
    </div>
  );
}