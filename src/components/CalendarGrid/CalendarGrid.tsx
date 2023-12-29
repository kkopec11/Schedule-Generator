import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./components/columns";
import { rows } from "./components/rows";

const CalendarGrid = () => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        "& .super-app-theme--header": {
          backgroundColor: "rgba(0, 106, 255, 0.55)",
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        disableRowSelectionOnClick
        hideFooter
        showCellVerticalBorder
        showColumnVerticalBorder
      />
    </Box>
  );
};

export default CalendarGrid;
