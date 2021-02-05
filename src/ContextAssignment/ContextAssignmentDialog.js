import { Typography } from "@material-ui/core";
import CustomDialog from "../GenericComponents/CustomDialog/CustomDialog";
import Layout from "./Layout";

const ContextAssingmentDialog = ({ open, handleClose }) => {
  return (
    <CustomDialog title="Actividad" open={open} handleClose={handleClose}>
      <Typography>
        En esta actividad tendrán que usar context y reducer para lograr que los botones 
        tengan los colores que sean escritos en los campos de texto. Los archivos que deben 
        fixear son <code>LayoutContext.js</code> y <code>LayoutForm.js</code>. En aquellos archivos 
        podrán encontrar mas detalles.
      </Typography>
      <Layout />
    </CustomDialog>
  );
};

export default ContextAssingmentDialog;
