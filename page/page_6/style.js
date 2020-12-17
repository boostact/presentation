import jss from "jss";
import preset from "jss-preset-default";
import animation from "../common/animation";

jss.setup(preset());

const style = {
  "@keyframes hinge": animation.hinge,
    titleEvent:{
        animationName: "$hinge",
        animationDuration: "3s",
    },
    leftImage: {
        position: "absolute",
        marginTop: "100px",
        left: "200px",
        height: "70%",
        width: "35%",
    },
    boostact: {
        width: "100%",
        height: "100%",
        opacity: "0",
    },

    rightImage: {
        position: "absolute",
        right: "200px",
        marginTop: "100px",
        width: "35%",
        height: "70%",
    },
    dog: {
        width: "100%",
        height: "100%",
    },
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
