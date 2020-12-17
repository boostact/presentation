import jss from "jss";
import preset from "jss-preset-default";
import animation from "../common/animation";

jss.setup(preset());

const style = {
  "@keyframes reduce": animation.reduce,
  page4: {
    display: "flex",
    minHeight: "100%",
    width: "100%",
  },
  JSTree: {
    animationName: "$reduce",
    animationDuration: "5s",
    position: "absolute",
    left: "calc(50% - 217px)",
  },
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
