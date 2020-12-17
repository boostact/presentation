import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const style = {};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
