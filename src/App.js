import { Button, CssBaseline, makeStyles } from "@material-ui/core";
import { useState } from "react";
import UseContextDialog from "./useContext/UseContextDialog";
import UseEffectDialog from "./useEffect/UseEffectDialog";
import UseReducerDialog from "./useReducer/UseReducerDialog";
import UseRefDialog from "./useRef/UseRefDialog";
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
  const [isUseEffectOpen, setIsUseEffectOpen] = useState(false);
  const [isUseReducerOpen, setIsUseReducerOpen] = useState(false);
  const [isUseContextOpen, setIsUseContextOpen] = useState(false);
  const [isUseRefOpen, setIsUseRefOpen] = useState(false);

  return (
    <div className={classes.application}>
      <CssBaseline />
      <h1>Hooks portal</h1>
      <Button variant="outlined" onClick={() => setIsUseStateOpen(true)}>
        Hook: useState
      </Button>
      <Button variant="outlined" onClick={() => setIsUseEffectOpen(true)}>
        Hook: useEffect
      </Button>
      <Button variant="outlined" onClick={() => setIsUseReducerOpen(true)}>
        Hook: useReducer
      </Button>
      <Button variant="outlined" onClick={() => setIsUseContextOpen(true)}>
        Hook: useContext
      </Button>
      <Button variant="outlined" onClick={() => setIsUseRefOpen(true)}>
        Hook: useRef
      </Button>
      <UseStateDialog
        open={isUseStateOpen}
        handleClose={() => setIsUseStateOpen(false)}
      />
      <UseEffectDialog
        open={isUseEffectOpen}
        handleClose={() => setIsUseEffectOpen(false)}
      />
      <UseReducerDialog
        open={isUseReducerOpen}
        handleClose={() => setIsUseReducerOpen(false)}
      />
      <UseContextDialog
        open={isUseContextOpen}
        handleClose={() => setIsUseContextOpen(false)}
      />
      <UseRefDialog
        open={isUseRefOpen}
        handleClose={() => setIsUseRefOpen(false)}
      />
    </div>
  );
}

export default App;
