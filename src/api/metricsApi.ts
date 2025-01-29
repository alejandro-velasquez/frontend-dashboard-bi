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
    const response = await fetch(`${BASE_URL}/balance/${id}/${month}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    });
    
    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }

    return response.json();
}