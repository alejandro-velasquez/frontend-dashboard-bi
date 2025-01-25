import { ExpenseResponseDto } from '../types/ExpenseTypes';
import React, { useEffect, useState } from "react";


const Expense: React.FC = () => {
  const [expenseData, setExpenseData] = useState<ExpenseResponseDto | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExpense = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:8081/api/finanzas/gastos/1");

        if (!response.ok) {
          throw new Error(`Error al obtener los datos: ${response.status}`);
        }

        const data: ExpenseResponseDto = await response.json();
        setExpenseData(data);
      } catch (err: any) {
        setError(err.message || "Error desconocido");
      } finally {
        setLoading(false);
      }
    };
    fetchExpense();
  }, []);

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>{error}</p>;

  return (
   <div>
      <h1>Bienvenido a la página de Gastos</h1>
      {expenseData ? (
        <div>
          <h2>Total de Gastos: ${expenseData.totalExpenses.toFixed(2)}</h2>
        </div>
      ) : (
        <p>No hay datos disponibles.</p>
      )}
    </div>
  );
};


export { Expense };
