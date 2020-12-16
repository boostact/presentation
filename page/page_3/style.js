import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const style = {
    page3: {
        minHeight: "100%",
        width: "100%",
    },
    imageBox: {
        textAlign: "center",
        height: "100%",
        paddingTop: "0px",
    },
    treeImage: {
        width: "50%",
        bottom: "0px",
    },
    framework: {
        position: "absoulte",
        color: "white",
        top: "50%",
    },
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
