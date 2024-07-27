import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useEffect, useState } from "react";
import ErrorIcon from '@mui/icons-material/Error';


export default function Allert() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => setOpen(false), 8000);
  });

  return (
    <>
      <Snackbar open={open} autoHideDuration={8000}>
        <Alert
          variant="filled"
          severity="error"
          icon={<ErrorIcon fontSize="large"/>}
          sx={{ width: "100%", textAlign: "center", fontSize: "24px" }}
        >
          Ошибка. Попробуйте ещё раз!
        </Alert>
      </Snackbar>
    </>
  );
}
