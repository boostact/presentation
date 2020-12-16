import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const style = {
  bannerImage: {
    display: "block",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "100px",
  },
  members: {
    width: "90%",
    marginTop: "65px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    color: "white",
    flexDirection: "column",
  },
  freeD: {
    textAlign: "right",
    fontSize: "50px",
    fontWeight: "bold",
  },
  member: {
    textAlign: "right",
    fontSize: "30px",
  },
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
