const animation = {
  fadeIn: {
    "0%": {
      marginLeft: "100%",
      width: "100%",
    },
    "100%": {
      marginTop: "180px",
      width: "100%",
    },
  },
  tada: {
    "0%": {
      transform: "scale3d(1, 1, 1)",
    },
    "20%": {
      transform: "scale3d(.9, .9, .9) rotate3d(0, 0, 1, 0deg)",
    },
    "30%": {
      transform: "scale3d(.9, .9, .9) rotate3d(0, 0, 1, 5deg)",
    },
    "40%": {
      transform: "scale3d(.9, .9, .9) rotate3d(0, 0, 1, -5deg)",
    },
    "50%": {
      transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 5deg)",
    },
    "60%": {
      transform: "scale3d(1,1, 1.1, 1.1) rotate3d(0, 0, 1, -5deg)",
    },
    "70%": {
      transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 5deg)",
    },
    "80%": {
      transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -5deg)",
    },
    "90%": {
      transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 5deg)",
    },
    "100%": {
      transform: "scale3d(1, 1, 1)",
    },
  },
  expanse: {
    "0%": {
      transfrom: "scale3d(1,1,1)",
    },
    "100%": {
      transform: "scale3d(3,3,3)",
    },
  },
};

// const { animation } = jss.createStyleSheet(style).attach();

export default animation;
