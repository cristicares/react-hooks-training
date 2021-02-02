import { Button, TextField } from "@material-ui/core";
import { useReducer } from "react";

const initialState = {
  myName: "",
  myDescription: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_MY_NAME": {
      return {
        ...state,
        myName: action.myName,
      };
    }
    case "SET_MY_DESCRIPTION": {
      return {
        ...state,
        myDescription: action.myDescription,
      };
    }
    default: {
      return state;
    }
  }
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChangeMyName = (event) => {
    dispatch({ type: "SET_MY_NAME", myName: event.target.value });
  };

  const handleChangeMyDescription = (event) => {
    dispatch({ type: "SET_MY_DESCRIPTION", myDescription: event.target.value });
  };

  const handleClickButtonShowState = () => {
    alert("Revisa la consola!");
    console.log(state);
  };

  return (
    <>
      <TextField
        value={state.myName}
        onChange={handleChangeMyName}
        label={"MyName"}
        fullWidth
      />
      <TextField
        label={"MyDescription"}
        value={state.myDescription}
        onChange={handleChangeMyDescription}
      />
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickButtonShowState}
      >
        Ver state
      </Button>
    </>
  );
};

export default UseReducerExample;
