import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import { useEffect, useState } from "react";

export default function Allert() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => setOpen(false), 8000);
  })

  return (
    <>
      <Snackbar open={open} autoHideDuration={8000}>
        <Alert
          severity="success"
          variant="filled"
          icon={<CheckIcon fontSize="large" />}
          sx={{ width: "100%", textAlign: "center", fontSize: "24px" }}
        >
          Ваша заявка принята! Скоро с вами свяжемся!
        </Alert>
      </Snackbar>
    </>
  );
}