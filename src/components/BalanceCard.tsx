import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { BalanceSheet } from "../types/MetricsTypes";

interface Props {
  balance: BalanceSheet | null;
}

export default function BalanceCard({ balance }: Props) {
  return (
    <Card className="balance-card">
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom>
          Bienvenido a Parfinanciero!
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Resumen Financiero
        </Typography>
        <Typography variant="h6" align="center" className="balance-value">
          Balance General: {balance?.balanceSheet}
        </Typography>
        <Typography variant="body1" align="center" className="income-value">
          Ingresos: {balance?.income}
        </Typography>
        <Typography variant="body1" align="center" className="expense-value">
          Gastos: {balance?.expense}
        </Typography>
      </CardContent>
    </Card>
  );
}
