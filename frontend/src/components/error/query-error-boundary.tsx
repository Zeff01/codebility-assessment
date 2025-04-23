"use client"

import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./error-fallback";

/*
 * Docs for implementing error handling with tanstack-query along with react-error-boundary:
 *
 * https://tanstack.com/query/latest/docs/framework/react/reference/QueryErrorResetBoundary
 *
 * */

type QueryErrorBoundaryProps = {
	children: React.ReactNode;
};

export function QueryErrorBoundary({ children }: QueryErrorBoundaryProps) {
	return (
		<QueryErrorResetBoundary>
			{({ reset }) => (
				<ErrorBoundary
					fallbackRender={({ error, resetErrorBoundary }) => (
						<ErrorFallback
							error={error}
							resetErrorBoundary={resetErrorBoundary}
						/>
					)}
					onReset={reset}
				>
					{children}
				</ErrorBoundary>
			)}
		</QueryErrorResetBoundary>
	);
}
