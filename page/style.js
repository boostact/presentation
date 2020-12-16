import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const style = {
  button: {
    position: "fixed",
    height: "216px",
    width: "216px",
    right: "calc(50% - 108px)",
    top: "calc(50% - 108px)",
    "&:hover": {
      cursor: "pointer",
    },
  },
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
