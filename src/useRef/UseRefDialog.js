import { Typography } from "@material-ui/core";
import CodeBlock from "../GenericComponents/CodeBlock/CodeBlock";
import CustomDialog from "../GenericComponents/CustomDialog/CustomDialog";
import ExampleContainer from "../GenericComponents/ExampleContainer/ExampleContainer";
import UseRefExample from "./UseRefExample";

const reactRefCode = `const MyComponent = () => {
    const divRef = useRef();

    useEffect(() => {
        if (divRef.current) {
            console.log(divRef.current.styles);
        }
    }, [divRef]);

    return <div ref={divRef}></div>;
}`;

const UseRefDialog = ({ open, handleClose }) => {
  return (
    <CustomDialog title="Hook: useRef()" open={open} handleClose={handleClose}>
      <Typography>
        Este hook sirve para referenciar elementos del DOM, con esta referencia
        podemos obtener información o manipularlo sin la necesidad de recurrir
        al objeto <code>document</code>, permitiendo así tener una
        transformación del DOM con mejor rendimiento. Para utilizarlo debemos
        pasar por la propiedad <code>ref</code> de algún elemento del DOM, luego
        podremos acceder a sus propiedades por medio de la propiedad{" "}
        <code>current</code> del objeto que retorna el hook.
      </Typography>
      <CodeBlock codeString={reactRefCode} />
      <Typography>
        <b>Nota:</b> El valor <code>current</code> estará disponible al
        finalizar el primer ciclo de renderizado, por eso es importante validar
        que exista de alguna forma, en el bloque de código se utilizó un{" "}
        <code>useEffect</code>
        para tal.
      </Typography>
      <ExampleContainer title="Ejemplo">
        <UseRefExample />
      </ExampleContainer>
    </CustomDialog>
  );
};

export default UseRefDialog;
