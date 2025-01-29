import { getIncomeVsExpense } from "../api/metricsApi";
import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface IncomeVsExpense {
    name: string;
    value: number;
}

const IncomeVsExpenseChart: React.FC<{ userId: number; month: string }> = ({ userId, month }) => {
  const [data, setData] = useState<IncomeVsExpense[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

 useEffect(() => {
  async function loadData() {
    try {
      const result = await getIncomeVsExpense(userId, month);

      if (!result || typeof result.totalIncome !== "number" || typeof result.totalExpense !== "number") {
        throw new Error("Datos inválidos recibidos.");
      }

      setData([
        { name: "Ingresos", value: result.totalIncome },
        { name: "Gastos", value: result.totalExpense },
      ]);
    } catch (err: any) {
      setError(err.message || "Error al cargar los datos.");
    } finally {
      setLoading(false);
    }
  }

  loadData();
}, [userId, month]);

  if (loading) return <p>Cargando datos...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;
    if (data.length === 0) return <p>No hay datos para mostrar.</p>;

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export { IncomeVsExpenseChart };