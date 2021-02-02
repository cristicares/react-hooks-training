import { TextField, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    console.log("Ejecución de efecto:", text);
    if (text === "alerta!") {
      alert("ALERTA, SE HA EJECUTADO LA CONDICIÓN DEL EFECTO");
    }
  }, [text]);

  return (
    <>
      <Typography>
        Cuando en el siguiente campo se escriba el texto: alerta! se mostrará un{" "}
        <code>alert</code>, pero cada cambio será mostrado en consola.
      </Typography>
      <TextField
        placeholder="Campo de texto"
        onChange={handleChange}
        value={text}
      />
    </>
  );
};

export default UseEffectExample;