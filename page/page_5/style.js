import jss from "jss";
import preset from "jss-preset-default";
import animation from "../common/animation";

jss.setup(preset());

const style = {
  "@keyframes ttiyong": animation.ttiyong,
  radious: {
    display: "flex",
    width: "350px",
    height: "350px",
    lineHeight: "20px",
    justifyContent: "cetner",
    alignItems: "center",
    padding: "10px",
    borderRadius: "50%",
    color: "white",
    "&:hover": {
      animationName: "$ttiyong",
      animationDuration: "1s",
      cursor: "pointer",
      width: "500px",
      height: "500px",
    },
    boxShadow: "10px 10px 10px black",
  },
  radiousText: {
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: "30px",
  },
  radiousContainer: {
    marginTop: "250px",
    display: "flex",
    justifyContent: "space-around",
  },
  red: {
    background: "#EB6A9B",
  },
  blue: {
    background: "#5571D4",
  },
  green: {
    background: "#5BADAF",
  },
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
