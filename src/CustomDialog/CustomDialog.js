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
    "& *": {
      "&:not(code)": {
        marginBottom: 8,
      },
    },
    "& code": {
      backgroundColor: theme.palette.background.default,
      paddingLeft: 4,
      paddingRight: 4,
      "&:first-of-type": {
        paddingTop: 4,
      },
      "&:last-of-type": {
        marginBottom: 8,
        paddingBottom: 4,
      },
    },
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
