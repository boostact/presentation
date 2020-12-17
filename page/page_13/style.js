import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const style = {
  contentString: {
    fontSize: "30px",
    marginTop: "30px",
    marginLeft: "50px",
    color: "white",
  },
  red: {
    background: "red",
  },
  container: {
    marginTop: "120px",
  },
  jjal: {
    marginTop: "70px",
    position: "fixed",
    left: "50%",
    width: "45%",
    height: "45%",
  },
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
