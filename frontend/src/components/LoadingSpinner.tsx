interface LoadingSpinnerProps {
	size?: "sm" | "md" | "lg";
	text?: string;
	className?: string;
}

export function LoadingSpinner({ size = "md", text, className = "" }: LoadingSpinnerProps) {
	const sizeClasses = {
		sm: "h-8 w-8",
		md: "h-16 w-16",
		lg: "h-32 w-32",
	};

	return (
		<div className={`flex items-center justify-center ${className}`}>
			<div className="text-center">
				<div
					className={`animate-spin rounded-full border-b-2 border-gray-900 mx-auto ${sizeClasses[size]}`}
				></div>
				{text && <p className="mt-4 text-lg">{text}</p>}
			</div>
		</div>
	);
}
