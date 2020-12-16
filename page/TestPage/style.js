import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const style = {
    codeSandBox: {
        display: "flex",
        minWidth: "100%",
        minHeight: "100%",
    },
    codeBox: {
        border: "1px solid red",
        width: "50%",
        minHeight: "500px",
    },
    paintBox: {
        border: "1px solid red",
        width: "50%",
        minHeight: "500px",
    },
    code: {
        width: "calc(100% - 40px)",
        height: "calc(100% - 40px)",
        border: "1px solid blue",
        margin: "20px",
    },
    paint: {
        width: "calc(100% - 40px)",
        height: "calc(100% - 40px)",
        border: "1px solid blue",
        margin: "20px",
        background: "white",
    },
    virtualRoot: {
        background: "black",
        width: "100%",
        height: "20px",
        color: "white",
    },
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
