import React, { useEffect, useState } from "react";
import { CircularProgress, Typography } from "@mui/material";
import { getIncome } from "../api/metricsApi";
import { BalanceSheet } from "../types/MetricsTypes";
import BalanceCard from "../components/BalanceCard";


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
    <div className="centered-container">
      <BalanceCard balance={balance} />
    </div>
  );
}
