import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dialogContentContainer: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      "&:not(code)": {
        marginBottom: 8,
      },
    },
    "& > code": {
      backgroundColor: "#e8e8e8",
      paddingLeft: 8,
      paddingRight: 8,
      "&:first-of-type": {
        paddingTop: 8,
      },
      "&:last-of-type": {
        marginBottom: 8,
        paddingBottom: 8,
      },
    },
    "& > p": {
      "& > code": {
        backgroundColor: "#e8e8e8",
        fontSize: 14,
      }
    }
  },
}));

const CustomDialog = ({ open, handleClose, title, children }) => {
  const classes = useStyles();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <div className={classes.dialogContentContainer}>{children}</div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
