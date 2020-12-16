import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const style = {
    titleNumber: { color: "white", fontSize: "100px", fontWeight: "700" },
    title: { color: "white", fontSize: "40px", fontWeight: "900" },
    titleBox: { paddingLeft: "30px" },
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
