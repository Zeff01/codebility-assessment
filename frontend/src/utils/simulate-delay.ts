export const simulateDelay = (ms: number) =>
	new Promise((resolve) => setTimeout(resolve, ms));
