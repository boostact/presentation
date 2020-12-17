import jss from "jss";
import preset from "jss-preset-default";
import animation from "../common/animation";

jss.setup(preset());

const style = {
  "@keyframes expanse": animation.expanse,
  "@keyframes fadeout": animation.fadeOut,
  page3: {
    minHeight: "100%",
    width: "100%",
  },
  imageBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: "100%",
    paddingTop: "0px",
  },
  treeImage: {
    width: "50%",
    bottom: "0px",
  },
  treeAnimation: {
    animationName: "$expanse",
    animationDuration: "20s",
  },
  framework: {
    position: "absolute",
    fontSize: "250px",
    color: "#61dafb",
    //top: "calc(50% - 125px)",
    zIndex: "4",
    fontWeight: "900",
  },
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
