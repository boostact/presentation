import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const style = {
  button: {
    position: "fixed",
    height: "324px",
    width: "324px",
    right: "calc(50% - 162px)",
    top: "calc(50% - 162px)",
    "&:hover": {
      cursor: "pointer",
      background: "black",
    },
  },
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
