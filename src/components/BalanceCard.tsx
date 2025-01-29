import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

const CardContainer = styled(Box)({
  padding: "20px",
  
  borderRadius: "10px",
 
  textAlign: "center", // Centrar el contenido
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "150px",
  gap: "10px",
});

const TitleText = styled(Typography)({
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "#333333", // Dark Gray
});

const ValueText = styled(motion.span)({
  fontSize: "2.5rem",
  fontWeight: "bold",
  color: "#FFD700", // Gold
});

const BalanceIcon = styled(motion.div)({
  fontSize: "2.5rem",
});

export default function DynamicBalanceCard({ balance }: { balance: any }) {
  const isPositive = !balance?.balanceSheet?.startsWith("-");

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
    <CardContainer>
      <TitleText>Balance General</TitleText>
      <ValueText variants={textAnimation} initial="initial" animate="animate">
        {balance?.balanceSheet}
      </ValueText>
      <BalanceIcon variants={iconAnimation}>
        {isPositive ? (
          <TrendingUpIcon sx={{ color: "#008080", fontSize: "2.5rem" }} />
        ) : (
          <TrendingDownIcon sx={{ color: "#FF4500", fontSize: "2.5rem" }} />
        )}
      </BalanceIcon>
    </CardContainer>
  );
}
