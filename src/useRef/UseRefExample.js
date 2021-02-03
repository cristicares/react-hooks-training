import { makeStyles, TextField } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";

const useStyles = makeStyles(() => ({
  exampleDiv: {
    background: "red",
  },
}));

const UseRefExample = () => {
  const classes = useStyles();
  const divRef = useRef();

  const [divWidth, setDivWidth] = useState(100);
  const [divHeight, setDivHeight] = useState(100);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.style.width = `${divWidth}px`;
      divRef.current.style.height = `${divHeight}px`;
    }
  }, [divRef, divWidth, divHeight]);

  return (
    <>
      <TextField
        label="Ancho"
        value={divWidth}
        onChange={(e) => setDivWidth(e.target.value)}
        type='number'
      />
      <TextField
        label="Alto"
        value={divHeight}
        onChange={(e) => setDivHeight(e.target.value)}
        type='number'
      />
      <div ref={divRef} className={classes.exampleDiv}></div>
    </>
  );
};

export default UseRefExample;
