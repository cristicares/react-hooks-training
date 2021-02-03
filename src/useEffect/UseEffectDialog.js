import { Typography } from "@material-ui/core";
import CodeBlock from "../GenericComponents/CodeBlock/CodeBlock";
import CustomDialog from "../GenericComponents/CustomDialog/CustomDialog";
import ExampleContainer from "../GenericComponents/ExampleContainer/ExampleContainer";
import UseEffectExample from "./UseEffectExample";

const reactEffectCode = `useEffect(() => {
  if (someState) {
    setOtherState('newOtherValue');
  }
}, [someState]);`;

const UseEffectDialog = ({ open, handleClose }) => {
  return (
    <CustomDialog
      title="Hook: useEffect(effectFunction [, dependencyArray])"
      open={open}
      handleClose={handleClose}
    >
      <Typography>
        Este hook sirve para declarar efectos colaterales en un componente, 
        esta función será ejecutada cada vez que el componente se
        renderiza y re-renderiza, a menos de que se le provea como segundo
        argumento un <b>arreglo de dependencias</b>. En este caso, el efecto
        será ejecutado sólo cuando el componente se renderiza y{" "}
        <b>cada vez que alguna de las variables u objetos dentro del arreglo de
          dependencias cambie</b>. Ejemplo de sintáxis:
      </Typography>
      <CodeBlock codeString={reactEffectCode} />
      <ExampleContainer title="Ejemplo">
        <UseEffectExample />
      </ExampleContainer>
    </CustomDialog>
  );
};

export default UseEffectDialog;
