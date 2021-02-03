import CustomDialog from "../GenericComponents/CustomDialog/CustomDialog";
import { Typography } from "@material-ui/core";
import ExampleContainer from "../GenericComponents/ExampleContainer/ExampleContainer";
import UseContextExample from "./UseContextExample";
import CodeBlock from "../GenericComponents/CodeBlock/CodeBlock";

const reactContextCode = `//ThemeContext.js
const theme = {
    mainColor: "#0a043c",
    secondaryColor: "#03506f",
    fontColor: "#FFF",
};
  
const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
};

//ThemeButtons.js
const ThemedButtons = () => {
    const theme = useContext(ThemeContext);

    return (
        <div>
        <Button
            style={{ 
                backgroundColor: theme.mainColor, 
                color: theme.fontColor 
            }}>
            Main button
        </Button>
        <Button
            style={{
                backgroundColor: theme.secondaryColor,
                color: theme.fontColor,
            }}>
            Secondary button
        </Button>
        </div>
    );
};

//App.js
const App = () => {
    return (
        <ThemeContextProvider>
            <ThemedButtons />
        </ThemeContextProvider>
    );
};
`;

const UseContextDialog = ({ open, handleClose }) => {
  return (
    <CustomDialog
      title="Hook: useContext(context)/createContext()"
      open={open}
      handleClose={handleClose}
    >
      <Typography>
        Este hook se usa para contextualizar uno o mas componentes, evitando
        pasar propiedades por muchos niveles. Este consiste de un{" "}
        <code>Provider</code> que es el encargado de wrappear el componente para
        entregar su valor, definido en la propiedad <code>value</code>. Para
        implementarlo necesitaremos crear un contexto y luego envolver nuestro componente 
        en el <code>Provider</code>, para luego consumir su valor en uno de los 
        componentes hijos, por ejemplo:
      </Typography>
      <CodeBlock codeString={reactContextCode} />
      <ExampleContainer title="Ejemplo">
        <UseContextExample />
      </ExampleContainer>
    </CustomDialog>
  );
};

export default UseContextDialog;
