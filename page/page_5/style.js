import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const style = {
    radious: {
        width: "350px",
        height: "350px",
        lineHeight: "20px",
        textAlign: "center",
        verticalAlign: "middle",
        padding: "10px",
        borderRadius: "50%",
        color: "white",
        "&:hover": {
            cursor: "pointer",
            width: "500px",
            height: "500px",
        },
        boxShadow: "10px 10px 10px black",
    },
    radiousText: {
        marginTop: "45%",
        fontSize: "30px",
    },
    radiousContainer: {
        marginTop: "250px",
        display: "flex",
        justifyContent: "space-around",
    },
    red: {
        background: "red",
    },
    blue: {
        background: "blue",
    },
    green: {
        background: "green",
    },
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
