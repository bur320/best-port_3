"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Header from "@/components/Header";

export default function Layout({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Box component="main">{children}</Box>
    </Box>
  );
}
