import { ExpenseResponseDto } from "../types/Expense";

const BASE_URL = "http://localhost:8081/api/finanzas";


export const getIncome = async (id: number): Promise<ExpenseResponseDto> => {
    const response = await fetch(`${BASE_URL}}/gastos/${id}`, {
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