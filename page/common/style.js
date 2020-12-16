import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const style = {
    titleNumber: {},
    title: {},
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
