'use client';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  maxQuantity: number;
  disabled?: boolean;
}

export default function QuantitySelector({
  quantity,
  onQuantityChange,
  maxQuantity,
  disabled = false,
}: QuantitySelectorProps) {
  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < maxQuantity) {
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-lg">
      <button
        onClick={handleDecrease}
        disabled={disabled || quantity <= 1}
        className="px-4 py-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <input
        type="number"
        value={quantity}
        onChange={(e) => {
          const val = Math.min(
            Math.max(parseInt(e.target.value) || 1, 1),
            maxQuantity
          );
          onQuantityChange(val);
        }}
        disabled={disabled}
        className="w-16 text-center py-2 border-l border-r border-gray-300 focus:outline-none disabled:opacity-50"
        min="1"
        max={maxQuantity}
      />
      <button
        onClick={handleIncrease}
        disabled={disabled || quantity >= maxQuantity}
        className="px-4 py-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}