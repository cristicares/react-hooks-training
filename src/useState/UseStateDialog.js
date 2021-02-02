import { Typography } from "@material-ui/core";
import CustomDialog from "../GenericComponents/CustomDialog/CustomDialog";
import ExampleContainer from "../GenericComponents/ExampleContainer/ExampleContainer";
import UseStateExample from "./UseStateExample";

const UseStateDialog = ({ open, handleClose }) => {
  return (
    <CustomDialog
      title="Hook: useState(initialState)"
      open={open}
      handleClose={handleClose}
    >
      <Typography>
        Este hook sirve para definir una variable de estado y su función de
        asignación. Puede recibir como parámetro un <code>initialState</code>{" "}
        que le entrega un valor inicial. Este valor puede ser consumido durante
        todo el ciclo de vida del componente. Su sintaxis es:
      </Typography>
      <code>const initialState = 'myInitialState';</code>
      <code>const [myState, setMyState] = useState(initialState);</code>
      <ExampleContainer title="Ejemplo">
        <UseStateExample />
      </ExampleContainer>
    </CustomDialog>
  );
};

export default UseStateDialog;
