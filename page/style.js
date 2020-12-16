import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const style = {
  button: {
    position: "fixed",
    height: "236px",
    width: "256px",
    right: "calc(50% - 128px)",
    top: "calc(50% - 128px)",
    background: {
      image:
        'url("https://s3.us-west-2.amazonaws.com/secure.notion-static.com/92856572-78c6-4439-8fa0-9ee85992753d/blueButton.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201216T140005Z&X-Amz-Expires=86400&X-Amz-Signature=1d398bed1999a8a2b5f9c2a7c0aa5c3fac184136c2847c7c788ccc64e754764e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22blueButton.png%22")',
    },
    "&:hover": {
      cursor: "pointer",
      background: {
        image:
          'url("https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f6059ab1-b285-4eba-9c5e-b277c762c0af/redButton.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201216T140812Z&X-Amz-Expires=86400&X-Amz-Signature=f4f35df267c7693dccd9e23e86eaba3a8757f05e0b72f6d38080513807ed92e8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22redButton.png%22")',
      },
    },
  },
  title: {
    color: "white",
    fontSize: "40px",
    fontWeight: "900",
    position: "fixed",
    right: "38%",
    top: "65%",
  },
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
