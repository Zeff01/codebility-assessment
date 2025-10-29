export async function apiGetFinancialData() {
  try {
    const response = await fetch("/data.json");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}
