import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const style = {
  members: {
    margin: "50px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  member: {
    display: "flex",
    flexDirection: "column",
  },
  name: {
    marginTop: "25px",
    textAlign: "center",
    color: "white",
    fontSize: "30px",
    fontWeight: "bold",
  },
  image: {
    width: "400px",
  },
  comment: {
    marginTop: "30px",
    width: "90%",
    minHeight: "500px",
    color: "white",
    fontSize: "20px",
  },
  quotes: {
    width: "30px",
  },
  rightQuote: {
    color: "red",
    marginLeft: "370px",
  },
  say: {
    textAlign: "center",
    width: "380px",
  },
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
