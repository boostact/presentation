import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const style = {
    leftImage: {
        position: "absolute",
        marginTop: "100px",
        left: "250px",
        height: "70%",
        width: "35%",
    },

    bob: {
        width: "100%",
        height: "100%",
    },

    rightImage: {
        position: "absolute",
        right: "100px",
        marginTop: "100px",
        width: "35%",
        height: "70%",
    },

    stop: {
        marginTop: "50px",
    },

    stopPic: {
        width: "500px",
        height: "456px",
    },
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
