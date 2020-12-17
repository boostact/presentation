import jss from "jss";
import preset from "jss-preset-default";
import animation from "../common/animation";
jss.setup(preset());

const style = {
  "@keyframes fadein": animation.fadeIn,
  bodyContainer: {
    display: "flex",
    flexDirection: "row",
  },
  jjal: {
    marginTop: "200px",
    marginLeft: "70px",
    position: "relative",
    width: "40%",
    height: "40%",
  },
  textContainer: {
    animationName: "$fadein",
    animationDuration: "1.5s",
    marginTop: "180px",
    marginLeft: "150px",
  },
  textContent: {
    fontSize: "45px",
    marginTop: "30px",
    color: "white",
  },
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
