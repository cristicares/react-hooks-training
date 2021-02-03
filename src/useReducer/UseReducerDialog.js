import { Typography } from "@material-ui/core";
import CodeBlock from "../GenericComponents/CodeBlock/CodeBlock";
import CustomDialog from "../GenericComponents/CustomDialog/CustomDialog";
import ExampleContainer from "../GenericComponents/ExampleContainer/ExampleContainer";
import UseReducerExample from "./UseReducerExample";

const reactReducerCode = `const initialState = {
 myStateValue: '',
 myOtherStateValue: '',
}
const reducer = (state, action) => {
 switch(action.type) {
  case 'SET_STATE_VALUE': {
   return { ...state, myStateValue: action.newMyStateValue }
  }
  case 'SET_OTHER_STATE_VALUE': {
   return { ...state, myOtherStateValue: action.newMyOtherStateValue }
  }
  default': {
   return state
  }
 }
}
const [state, dispatch] = useReducer(reducer, initialState);`

const dispatchReducerCode = `
dispatch({ type: 'SET_STATE_VALUE', newMyStateValue: 'a new value for myStateValue' })`

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
      <CodeBlock codeString={reactReducerCode} />
      <Typography>
        Una vez declarado el <code>useReducer</code> nos entrega una variable{" "}
        <code>state</code> y una función <code>dispatch</code>. El objeto{" "}
        <code>state</code> mantendrá y persistirá el estado, mientras{" "}
        <code>dispatch</code> es la función que permite mutarlo. Al usar:
      </Typography>
      <CodeBlock codeString={dispatchReducerCode} />
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
