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
        position: "absolute",
        fontSize: "250px",
        color: "#61dafb",
        top: "calc(50% - 125px)",
        marginLeft: "17.5%",
        zIndex: "4",
        fontWeight: "900",
    },
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
