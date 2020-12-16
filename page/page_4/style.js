import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const style = {
    page4: {
        display: "flex",
        minHeight: "100%",
        width: "100%",
    },
    JSTree: {
        position: "absolute",
        left: "calc(50% - 217px)",
    },
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
