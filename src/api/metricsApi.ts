import { BalanceSheet } from "../types/MetricsTypes";

const BASE_URL = "http://localhost:8081/api/finanzas/metricas";


export const getIncome = async (id: number): Promise<BalanceSheet> => {
    const response = await fetch(`${BASE_URL}/balance-general/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }
    return response.json();
}

export const getIncomeVsExpense = async (id: number, month: string) => {
  const formattedMonth = month.padStart(2, "0"); // Asegura que el mes tenga 2 dígitos ("7" → "07")

  const url = `${BASE_URL}/balance/${id}/${formattedMonth}` // Ruta corregida

  console.log("📡 Fetching data from:", url); // Debugging para verificar la URL

  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error ${response.status}: ${errorText}`);
  }

  const result = await response.json();
  console.log("📊 Datos recibidos de API:", result); // Debugging

  return result;
}