import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const style = {
<<<<<<< HEAD
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
=======
    radious : `
        width:300px;
        height:300px;
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
        margin-top:240px;
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
>>>>>>> 89317492bf9ea0d172c5051a617a9a74c4986044
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
