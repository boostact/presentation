import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const style = {
    page2: {
        display: "flex",
        minHeight: "100%",
        width: "100%",
    },
    leftSide: {
        width: "50%",
        minWidth: "50%",
    },
    rightSide: {
        width: "50%",
        minHeight: "100%",
    },
    image: {
        width: "100%",
        maxHeight: "100%",
    },
    chatImgBox: {
        marginTop: "150px",
    },
    chatImg: {
        maxWidth: "90%",
    },
    imgDescription: {
        color: "white",
        fontSize: "20px",
        fontWeight: "900",
        textAlign: "right",
        paddingRight: "10%",
    },
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
