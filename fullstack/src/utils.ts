export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString();
};

export const handleFetchResponse = async <T>(
  response: Response,
  errorMessage?: string
): Promise<T> => {
  try {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(errorMessage || "Error fetching data:", error);
    throw error;
  }
};
