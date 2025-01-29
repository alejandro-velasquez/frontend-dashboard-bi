import React, { useEffect, useState } from "react";
import { CircularProgress, Grid, Typography, Box } from "@mui/material";
import { getIncome } from "../api/metricsApi";
import { BalanceSheet } from "../types/MetricsTypes";
import BalanceCard from "../components/BalanceCard";
import { IncomeVsExpenseChart } from "../components/IncomeVsExpense";

export default function HomePage() {
  const [balance, setBalance] = useState<BalanceSheet | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const result = await getIncome(1); // Cambia el "1" por el ID que necesites
        setBalance(result);
      } catch (err: any) {
        setError(err.message || "Error al cargar el balance general.");
      } finally {
        setLoading(false);
      }
    };

    fetchBalance();
  }, []);

  if (loading) {
    return (
      <div className="centered-container">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div className="centered-container">
        <Typography color="error" align="center">
          {error}
        </Typography>
      </div>
    );
  }

  return (
    <Box sx={{ padding: "20px" }}>
      {/* Grid para estructurar los componentes */}
      <Grid container spacing={3} justifyContent="center">
        {/* Balance Card */}
        <Grid item xs={12} sm={6} md={4}>
          <BalanceCard balance={balance} />
        </Grid>

        {/* Gráfico de Ingresos vs Gastos */}
        <Grid item xs={12} sm={6} md={8}>
          <IncomeVsExpenseChart userId={2} month="07" />
        </Grid>
      </Grid>
    </Box>
  );
}
