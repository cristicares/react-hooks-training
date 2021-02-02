import { useState } from "react";
import { TextField, Typography } from "@material-ui/core";

const UseStateExample = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <TextField
        placeholder="Campo de texto"
        onChange={handleChange}
        value={text}
        fullWidth
      />
      <Typography>
        El texto ingresado es: <strong>{text}</strong>
      </Typography>
    </>
  );
};

export default UseStateExample;