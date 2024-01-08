import React from "react";
import Button from "@mui/material/Button";
import { useGenerateDataRows } from "../../providers/DataContext";

const AddNewWorkerButton = () => {
  const { rows, setRows } = useGenerateDataRows();

  const createWorker = () => {
    setRows([...rows, { id: rows.length + 1, name: "Pracownik1" }]);
  };

  return (
    <Button variant="contained" onClick={createWorker}>
      Dodaj Pracownika
    </Button>
  );
};

export default AddNewWorkerButton;
