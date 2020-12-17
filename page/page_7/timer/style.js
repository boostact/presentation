import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const styleSheet = {
    timer: {
        width: "90%",
        fontSize: "110px",
    },
    topOfTimer: {
        width: "400px",
        borderBottom: "50px solid black",
        borderRight: "50px solid transparent",
        borderLeft: "50px solid transparent",
    },
    bigBox: {
        display: "flex",
        width: "500px",
        height: "200px",
    },
    timesBox: {
        background: "white",
        border: "1px solid black",
        borderBottom: "5px solid black",
        borderBottomLeftRadius: "10px",
        display: "flex",
        width: "150px",
        height: "200px",
    },
    divider: {
        background: "white",
        width: "25px",
        border: "3px solid black",
        height: "200px",
        borderBottom: "3px solid black",
    },
    minutesBox: {
        background: "white",
        border: "1px solid black",
        borderBottom: "5px solid black",
        display: "flex",
        width: "150px",
        height: "200px",
    },
    secondsBox: {
        background: "white",
        border: "1px solid black",
        borderBottom: "5px solid black",
        borderBottomRightRadius: "10px",
        display: "flex",
        width: "150px",
        height: "200px",
    },
    noneMarginP: {
        margin: "0px",
    },
};

const { classes } = jss.createStyleSheet(styleSheet).attach();
export default classes;
