import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const style = {
    babyImage:`
        position:relative;
        width:70%;
        left:29%;
        top:200px;
    `,
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
