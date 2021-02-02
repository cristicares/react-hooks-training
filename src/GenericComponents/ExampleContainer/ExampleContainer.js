import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";

const useStyles = makeStyles(() => {
  return {
    exampleContainer: {
      width: '100%',
      display: "flex",
      flexDirection: "column",
      "& > *": {
          marginBottom: 8,
      }
    },
  };
});

const ExampleContainer = ({ title, children }) => {
  const classes = useStyles();
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant={"h6"}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className={classes.exampleContainer}>{children}</div>
      </AccordionDetails>
    </Accordion>
  );
};

export default ExampleContainer;
