import jss from "jss";
import preset from "jss-preset-default";
import animation from "../common/animation";

jss.setup(preset());

const style = {
  "@keyframes expanse": animation.expanse,
    entireBox: {
        display: "flex",
        paddingLeft: "50px",
        justifyContent:"center"
    },

    codeBox: {
        '&:hover':{
            animationName: "$expanse",
            animationDuration: "7s",
        },
        width: "100%",
        backgroundColor: "#1E1E1E",
        color: "white",
        paddingLeft: "10px",
        paddingBottom: "10px",
        borderRadius: "10px",
    },

    innerCodeBox: {
        marginRight: "20px",
        color: "white",
        background: "red",
        borderRadius: "30px",
    },

    explaination: { marginTop: "30px", color: "white" },

    leftCode: {
        height: "100%",
        marginRight: "100px",
    },
    rightCode: {
        height: "100%",
    },
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
