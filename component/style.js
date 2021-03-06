import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const style = {
    timer: {
        position: "fixed",
        right: "30px",
        top: "10px",
        display: "flex",
        borderRadius: "30px",
        borderTop: "1px solid gray",
        borderRight: "4px solid black",
        width: "100px",
        fontSize: "20px",
        padding: "5px",
        textAlign: "center",
        background: "white",
        fontWeight: "600",
        zIndex: 9999,
        "&:hover": {
            cursor: "pointer",
            background: "linear-gradient( to right, #638dba, #FFFFFF )",
        },
    },
    timerDeadLine: {
        position: "fixed",
        right: "30px",
        top: "10px",
        display: "flex",
        borderRadius: "30px",
        borderBottom: "1px solid gray",
        borderRight: "4px solid black",
        width: "100px",
        fontSize: "20px",
        padding: "5px",
        textAlign: "center",
        background: "linear-gradient( to right, #d7767e, #FFFFFF )",
        fontWeight: "600",
        zIndex: 9999,
        "&:hover": {
            cursor: "pointer",
            background: "linear-gradient( to right, #638dba, #FFFFFF )",
        },
    },
    timeBox: {
        textAlign: "center",
        width: "33%",
    },
    leftButton: {
        position: "fixed",
        height: "100vh",
        width: "150px",
        top: "100px",
        left: "0px",
        opacity: "0.0",
        zIndex: 9000,
        "&:hover": {
            cursor: "pointer",
        },
    },
    rightButton: {
        position: "fixed",
        height: "100vh",
        width: "150px",
        top: "100px",
        right: "0px",
        opacity: "0.0",
        zIndex: 9000,
        "&:hover": {
            cursor: "pointer",
        },
    },
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
