import React from "react";
import CalendarGrid from "./components/CalendarGrid/CalendarGrid";
import GenerateButton from "./components/Button/GenerateButton";
import Box from "@mui/material/Box";

function App() {
  return (
    <Box>
      <CalendarGrid />
      <Box sx={{ margin: 3 }}>
        <GenerateButton />
      </Box>
    </Box>
  );
}

export default App;
