import React from "react";
import Button from "@mui/material/Button";
import { useGenerateDataRows } from "../../providers/DataContext";

const GenerateButton = () => {
  const { rows, setRows } = useGenerateDataRows();

  const generateRows = () => {
    const propToAdd: { [key: string]: string } = {};
    for (let index = 1; index <= 31; index++) {
      propToAdd[index] = "X";
    }
    const generatedData = rows.map((row: any) => ({ ...row, ...propToAdd }));
    setRows(generatedData);
  };

  return (
    <Button variant="contained" onClick={generateRows}>
      Generuj Grafik
    </Button>
  );
};

export default GenerateButton;
