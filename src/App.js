import { Button, CssBaseline, makeStyles } from "@material-ui/core";
import { useState } from "react";
import UseStateDialog from "./useState/UseStateDialog";

const useStyles = makeStyles((theme) => ({
  application: {
    "& button": {
      margin: 4,
      "&:nth-child(even)": {
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
      "&:nth-child(odd)": {
        backgroundColor: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
      },
    },
  },
}));

function App() {
  const classes = useStyles();

  const [isUseStateOpen, setIsUseStateOpen] = useState(false);

  return (
    <div className={classes.application}>
      <CssBaseline />
      <h1>Hooks portal</h1>
      <Button variant="outlined" onClick={() => setIsUseStateOpen(true)}>
        Hook: useState
      </Button>
      <Button variant="outlined">Hook: useEffect</Button>
      <Button variant="outlined">Hook: useContext</Button>
      <Button variant="outlined">Hook: useReducer</Button>
      <Button variant="outlined">Hook: useRef</Button>
      <UseStateDialog
        open={isUseStateOpen}
        handleClose={() => setIsUseStateOpen(false)}
      />
    </div>
  );
}

export default App;
