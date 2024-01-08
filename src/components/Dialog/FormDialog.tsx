import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import { useGenerateDataRows } from "../../providers/DataContext";

const FormDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  const { rows, setRows } = useGenerateDataRows();
  const [nameValue, setNameValue] = useState<string>();

  const handleClose = () => {
    setOpen(false);
  };

  const createWorker = () => {
    setRows([...rows, { id: rows.length + 1, name: nameValue }]);
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Formularz Nowego Pracownika</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Wypełnij poniższe pola aby dodać nowego pracownika
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Imie i Nazwisko"
          type="text"
          fullWidth
          variant="standard"
          value={nameValue}
          onChange={(e) => {
            setNameValue(e.target.value);
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Zamknij</Button>
        <Button onClick={createWorker}>Dodaj</Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormDialog;
