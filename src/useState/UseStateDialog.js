import { TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import CustomDialog from "../CustomDialog/CustomDialog";

const UseStateDialog = ({ open, handleClose }) => {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <CustomDialog
      title="Hook: useState(initialState)"
      open={open}
      handleClose={handleClose}
    >
      <Typography>
        Este hook sirve para definir una variable de estado y su función de
        asignación. Puede recibir como parámetro un `initialState` que le
        entrega un valor inicial. Este valor puede ser consumido durante todo el
        ciclo de vida del componente. Su sintaxis es:
      </Typography>
      <code>const initialState = 'myInitialState';</code>
      <code>const [myState, setMyState] = useState(initialState);</code>
      <Typography>Un ejemplo en vivo:</Typography>
      <TextField
        placeholder="Email"
        type="email"
        onChange={handleChange}
        value={email}
        autoComplete="off"
        name="customEmail"
      />
      <Typography>
        El email ingresado es: <strong>{email}</strong>
      </Typography>
    </CustomDialog>
  );
};

export default UseStateDialog;
