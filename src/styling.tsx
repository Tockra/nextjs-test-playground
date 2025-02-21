"use client";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider } from "@mui/material/styles";

export default function StyledMuiRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        {children}
      </StyledEngineProvider>
    </Box>
  );
}