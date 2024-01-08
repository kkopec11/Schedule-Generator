import React from "react";
import CalendarGrid from "./components/CalendarGrid/CalendarGrid";
import GenerateButton from "./components/Button/GenerateButton";
import Box from "@mui/material/Box";
import AddNewWorkerButton from "./components/Button/AddNewWorkerButton";

function App() {
  return (
    <Box>
      <CalendarGrid />
      <Box sx={{ margin: 3, gap: 3, display: "flex" }}>
        <AddNewWorkerButton />
        <GenerateButton />
      </Box>
    </Box>
  );
}

export default App;
