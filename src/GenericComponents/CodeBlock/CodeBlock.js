import { makeStyles } from "@material-ui/core";
import { CopyBlock, dracula } from "react-code-blocks";

const useStyles = makeStyles(() => {
  return {
    codeBlockContainer: {
      "& > div": {
        fontFamily: "monospace",
        fontSize: 14,
      },
    },
  };
});

const CodeBlock = ({ codeString }) => {
  const classes = useStyles();
  return (
    <div className={classes.codeBlockContainer}>
      <CopyBlock
        language={"jsx"}
        text={codeString}
        showLineNumbers={true}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    </div>
  );
};

export default CodeBlock;
