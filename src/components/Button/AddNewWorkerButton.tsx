import React, { useState } from "react";
import Button from "@mui/material/Button";
import FormDialog from "../Dialog/FormDialog";

const AddNewWorkerButton = () => {
  const [open, setOpen] = useState<boolean>(false);

  const openDialog = () => {
    setOpen(true);
  };

  return (
    <>
      <Button variant="contained" onClick={openDialog}>
        Dodaj Pracownika
      </Button>
      <FormDialog open={open} setOpen={setOpen} />
    </>
  );
};

export default AddNewWorkerButton;
