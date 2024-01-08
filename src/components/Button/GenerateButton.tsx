import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useGenerateDataRows } from "../../providers/DataContext";

const GenerateButton = () => {
  const [buttonState, setButtonState] = useState<Boolean>(true);
  const { rows, setRows } = useGenerateDataRows();

  const generateRows = () => {
    const propToAdd: { [key: string]: string } = {};
    if (buttonState) {
      for (let index = 1; index <= 31; index++) {
        propToAdd[index] = "X";
      }
    } else {
      for (let index = 1; index <= 31; index++) {
        propToAdd[index] = "";
      }
    }
    const generatedData = rows.map((row: any) => ({ ...row, ...propToAdd }));
    setRows(generatedData);
    setButtonState(!buttonState);
  };

  return (
    <Button variant="contained" onClick={generateRows}>
      {buttonState ? "Generuj Grafik" : "Wyczyść Grafik"}
    </Button>
  );
};

export default GenerateButton;
