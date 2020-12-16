import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const style = {
  bodyContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  jjal: {
    marginTop: "70px",
    marginLeft: "70px",
    position: "relative",
    width: "40%",
    height: "40%",
  },
  textContainer:{
    marginTop: "180px",
    marginLeft: "200px"
  },
  textContent:{
    fontSize: "45px",
    marginTop:"30px",
    color:"white"
  }
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
