type ErrorFallbackProps = {
	error: Error;
	resetErrorBoundary: () => void;
};

export function ErrorFallback({
	error,
	resetErrorBoundary,
}: ErrorFallbackProps) {
	return (
		<div className="p-4 border-2 border-red-500 rounded-lg">
			<h2 className="text-base font-semibold text-red-700">
				Something went wrong:
			</h2>
			<pre className="text-sm font-mono text-red-700">{error.message}</pre>
			<button
				className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
				onClick={resetErrorBoundary}
			>
				Try again
			</button>
		</div>
	);
}
