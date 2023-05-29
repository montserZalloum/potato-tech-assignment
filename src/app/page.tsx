'use client';

import CarList from "@/components/carList/carList";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box marginTop={2}>
        <CarList />
      </Box>
    </>
  )
}
