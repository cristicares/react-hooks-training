import { TextField, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      marginBottom: 8,
    },
  },
}));

const LayoutForm = () => {
  const classes = useStyles();

  const { state, dispatch } = {
    state: {},
    disaptch: () => {},
  }; //usar LayoutContext

  const handleMainColorChange = (event) => {
    dispatch({ type: "", mainColor: "" }); //Colocar la acción correspondiente en type y el nuevo valor en mainColor
  };

  const handleSecondaryColorChange = (event) => {
    dispatch({ type: "", secondaryColor: "" }); //Colocar la acción correspondiente en type y el nuevo valor en secondaryColor
  };

  const handleContrastColorChange = (event) => {
    dispatch({ type: "", contrastColor: "" }); //Colocar la acción correspondiente en type y el nuevo valor en contrastColor
  };

  return (
    <div className={classes.formContainer}>
      <TextField
        placeholder="Main color"
        value={state.mainColor}
        onChange={handleMainColorChange}
      />
      <TextField
        placeholder="Secondary color"
        value={state.secondaryColor}
        onChange={handleSecondaryColorChange}
      />
      <TextField
        placeholder="Contrast color"
        value={state.contrastColor}
        onChange={handleContrastColorChange}
      />
      <Button
        variant={"contained"}
        style={{ backgroundColor: state.mainColor, color: state.contrastColor }}
      >
        Test button main
      </Button>
      <Button
        variant={"contained"}
        style={{
          backgroundColor: state.secondaryColor,
          color: state.contrastColor,
        }}
      >
        Test button secondary
      </Button>
    </div>
  );
};

export default LayoutForm;
