import { createContext, useContext } from "react";
import { Button } from "@material-ui/core";

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

const ThemedButtons = () => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <Button
        style={{ backgroundColor: theme.mainColor, color: theme.fontColor }}
      >
        Main button
      </Button>
      <Button
        style={{
          backgroundColor: theme.secondaryColor,
          color: theme.fontColor,
        }}
      >
        Secondary button
      </Button>
    </div>
  );
};

const UseContextExample = () => {
  return (
    <ThemeContextProvider>
      Los colores de estos botones provienen de un tema pasado al context que pertenecen:
      <ThemedButtons />
    </ThemeContextProvider>
  );
};

export default UseContextExample;
