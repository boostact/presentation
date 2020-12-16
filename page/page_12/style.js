import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const style = {
  contentString: {
    fontSize: "50px",
    marginTop: "30px",
    marginLeft: "15px",
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
    position: "relative",
    left: "30%",
    width: "45%",
    height: "25%",
  },
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
