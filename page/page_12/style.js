import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const style = {
    entireBox: {
        display: "flex",
        paddingLeft: "50px",
        marginTop: "100px",
    },

    areaBox: {
        width: "100%",
        height: "100%",
    },

    inputBox: {
        background: "white",
        width: "20%",
        border: "3px solid red",
        height: "500px",
        borderRadius: "10px",
    },

    textBox: {
        background: "white",
        width: "20%",
        marginLeft: "30px",
        border: "3px solid red",
        height: "500px",
        borderRadius: "10px",
    },

    codeBox: {
        background: "white",
        width: "20%",
        border: "3px solid red",
        height: "500px",
        backgroundColor: "#1E1E1E",
        paddingLeft: "10px",
        borderRadius: "10px",
        marginTop: "0px",
        marginLeft: "30px",
    },

    innerCodeBox: {
        background: "white",
        marginRight: "20px",
        color: "white",
        background: "red",
        borderRadius: "30px",
    },

    explaination: {
        width: "20%",
        border: "3px solid red",
        height: "500px",
        color: "white",
        marginLeft: "30px",
    },

    leftCode: {
        height: "100%",
        marginRight: "100px",
    },
    rightCode: {
        height: "100%",
    },
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
