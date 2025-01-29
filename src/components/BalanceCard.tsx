import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

const HighlightText = styled(Typography)({
  fontSize: "2.5rem",
  fontWeight: "bold",
  color: "#FFD700",
});

const SubText = styled(Typography)({
  fontSize: "1rem",
  color: "#333333",
  marginTop: "8px",
});

const AnimatedText = styled(motion.span)({
  fontSize: "2.5rem",
  fontWeight: "bold",
  color: "#FFD700",
});

const BalanceIcon = styled(motion.div)({
  fontSize: "2rem",
  marginLeft: "8px",
});

const TopLeftBox = styled(Box)({
  position: "absolute",
  top: "20px",
  left: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "8px",
});

export default function DynamicBalanceCard({ balance }: { balance: any }) {
  // Determinar si el balance es positivo o negativo para mostrar el icono correspondiente
  const isPositive = !balance?.balanceSheet?.startsWith("-");

  // Animaciones para el texto y los iconos
  const textAnimation = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const iconAnimation = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: { type: "spring", stiffness: 200, damping: 10 },
  };

  return (
    <Box
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="transparent"
    >
      {/* Balance General en la parte superior izquierda */}
      <TopLeftBox>
        <HighlightText>Balance General:</HighlightText>
        <AnimatedText
          variants={textAnimation}
          initial="initial"
          animate="animate"
        >
          {balance?.balanceSheet}
        </AnimatedText>
        <BalanceIcon variants={iconAnimation}>
          {isPositive ? (
            <TrendingUpIcon sx={{ color: "#FFD700", fontSize: "2.5rem" }} />
          ) : (
            <TrendingDownIcon sx={{ color: "#FFD700", fontSize: "2.5rem" }} />
          )}
        </BalanceIcon>
      </TopLeftBox>

      {/* Ingresos y Gastos flotantes en el centro */}
      <Box display="flex" flexDirection="column" alignItems="center">
        <SubText>Ingresos: {balance?.income}</SubText>
        <SubText>Gastos: {balance?.expense}</SubText>
      </Box>
    </Box>
  );
}
