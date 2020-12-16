import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const style = {
  timer: {
    display: "flex",
    borderRadius: "30px",
    borderBottom: "1px solid gray",
    borderRight: "4px solid black",
    width: "100px",
    fontSize: "20px",
    padding: "5px",
    textAlign: "center",
    background: "linear-gradient( to right, #CBD9E8, #FFFFFF )",
    fontWeight: "600",
  },
  timeBox: {
    textAlign: "center",
    width: "33%",
  },
  leftButton: {
    position: "fixed",
    zIndex: 2,
  },
  rightButton: {
    position: "fixed",
    zIndex: 2,
  },
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
