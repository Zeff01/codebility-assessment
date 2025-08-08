interface ErrorMessageProps {
    message: string;
    onRetry?: () => void;
}

export const ErrorMessage = ({ message, onRetry }: ErrorMessageProps) => (
    <div className="flex flex-col items-center justify-center p-8 bg-red-50 dark:bg-red-900/30 rounded-lg border border-red-200 dark:border-red-700">
        <div className="text-red-600 dark:text-red-400 mb-4 text-center">
            <svg
                className="w-12 h-12 mx-auto mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.502 0L4.314 15.5C3.544 17.333 4.506 19 6.046 19z"
                />
            </svg>
            <p className="text-lg font-semibold">Oops! Something went wrong</p>
            <p className="text-sm">{message}</p>
        </div>
        {onRetry && (
            <button
                onClick={onRetry}
                className="px-4 py-2 bg-red-600 dark:bg-red-500 text-white rounded-lg hover:bg-red-700 dark:hover:bg-red-600 transition-colors"
            >
                Try Again
            </button>
        )}
    </div>
);
