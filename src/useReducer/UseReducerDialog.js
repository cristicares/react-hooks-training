import { Typography } from "@material-ui/core";
import CustomDialog from "../GenericComponents/CustomDialog/CustomDialog";
import ExampleContainer from "../GenericComponents/ExampleContainer/ExampleContainer";
import UseReducerExample from "./UseReducerExample";

const UseReducerDialog = ({ open, handleClose }) => {
  return (
    <CustomDialog
      title="Hook: useReducer(reducer [, initialState])"
      open={open}
      handleClose={handleClose}
    >
      <Typography>
        Este hook sirve para definir un conjunto de variables de estado dentro
        de una única fuente de verdad, usualmente se usa para componentes que
        requieren muchas variables de estado. Esta require una función{" "}
        <code>reducer</code> y opcionalmente un <code>initialState</code>. La
        funcion reducer sirve para definir los casos para enviar cambios al
        objeto de estado (<code>dispatch</code>). Un ejemplo de implementación
        es:
      </Typography>
      <code>{`const initialState = {`}</code>
      <code>&emsp;{`myStateValue: '',`}</code>
      <code>&emsp;{`myOtherStateValue: '',`}</code>
      <code>{`}`}</code>
      <code> </code>
      <code>{`const reducer = (state, action) => {`}</code>
      <code>&emsp;{`switch(action.type) {`}</code>
      <code>&emsp;&emsp;{`case 'SET_STATE_VALUE': {`}</code>
      <code>
        &emsp;&emsp;&emsp;
        {`return { ...state, myStateValue: action.newMyStateValue }`}
      </code>
      <code>&emsp;&emsp;{`}`}</code>
      <code>&emsp;&emsp;{`case 'SET_OTHER_STATE_VALUE': {`}</code>
      <code>
        &emsp;&emsp;&emsp;
        {`return { ...state, myOtherStateValue: action.newMyOtherStateValue }`}
      </code>
      <code>&emsp;&emsp;{`}`}</code>
      <code>&emsp;&emsp;{`default': {`}</code>
      <code>&emsp;&emsp;&emsp;{`return state`}</code>
      <code>&emsp;&emsp;{`}`}</code>
      <code>&emsp;{`}`}</code>
      <code>{`}`}</code>
      <code>const [state, dispatch] = useReducer(reducer, initialState);</code>
      <Typography>
        Una vez declarado el <code>useReducer</code> nos entrega una variable{" "}
        <code>state</code> y una función <code>dispatch</code>. El objeto{" "}
        <code>state</code> mantendrá y persistirá el estado, mientras{" "}
        <code>dispatch</code> es la función que permite mutarlo. Al usar:
        <br />
        <code>{`dispatch({ type: 'SET_STATE_VALUE', newMyStateValue: 'a new value for myStateValue' })`}</code>
      </Typography>
      <Typography>
        Estamos mutando el valor de la propiedad <code>myStateValue</code>{" "}
        dentro de <code>state</code>
      </Typography>
      <ExampleContainer title="Ejemplo">
        <UseReducerExample />
      </ExampleContainer>
    </CustomDialog>
  );
};

export default UseReducerDialog;
