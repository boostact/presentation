import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const style = {
    radious : `
        width:350px;
        height:350px;
        line-height: 20px;
        text-align:center;
        vertical-align:middle;
        padding:10px;
        border-radius: 50%;
        color: white;
    `,
    radiousText:`
        margin-top:45%;
        font-size:35px;
    `,
    radiousContainer : `
        margin-top:250px;
        display:flex;
        justify-content: space-around;
    `,
    red:`
        background:red;
    `,
    blue:`
        background:blue;
    `,
    green:`
        background:green;
    `
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
