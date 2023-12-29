import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./components/columns";
import { useGenerateDataRows } from "../../providers/DataContext";

const CalendarGrid = () => {
  const { rows } = useGenerateDataRows();

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
        disableColumnFilter
        disableColumnMenu
      />
    </Box>
  );
};

export default CalendarGrid;
