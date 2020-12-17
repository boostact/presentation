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
      transfrom: "scale(1)",
    },
    "50%": {
      transform: "scale(2)",
      transformOrigin: "50% 100%",
    },
    "100%": {
      transform: "scale(2)",
      transformOrigin: "50% 100%",
    },
  },
  reduce: {
    "0%": {
      transform: "scale3d(3,3,3)",
    },
    "100%": {
      transform: "scale3d(1,1,1)",
    },
  },
  lightSpeedIn: {
    "0%": {
      transform: "translate3d(100%, 0, 0) skewX(-30deg)",
      opacity: 0,
    },
    "60%": {
      transform: "skewX(20deg)",
      opacity: 1,
    },
    "80%": {
      transform: "skewX(-5deg)",
      opacity: 1,
    },
    "100%": {
      transform: "none",
      opacity: 1,
    },
  },
  ttiyong: {
    "0%": {
      transform: "scale3d(1, 1, 1)",
    },
    "30%": {
      transform: "scale3d(1.1, .9, 1)",
    },
    "40%": {
      transform: "scale3d(0.9, 1.1, 1)",
    },
    "50%": {
      transform: "scale3d(1.05, .95, 1)",
    },
    "65%": {
      transform: "scale3d(.97, 1.03, 1)",
    },
    "75%": {
      transform: "scale3d(1.02, .98, 1)",
    },
    "100%": {
      transform: "scale3d(1, 1, 1)",
    },
  },
  hinge: {
    "0%": {
      transformOrigin: "top left",
      animationTimingFunction: "ease-in-out",
    },
    "20%": {
      transform: "rotate3d(0, 0, 1, 80deg)",
      transformOrigin: "top left",
      animationTimingFunction: "ease-in-out",
    },
    "60%": {
      transform: "rotate3d(0, 0, 1, 80deg)",
      transformOrigin: "top left",
      animationTimingFunction: "ease-in-out",
    },
    "40%": {
      transform: "rotate3d(0, 0, 1, 60deg)",
      transformOrigin: "top left",
      animationTimingFunction: "ease-in-out",
      opacity: 1,
    },
    "80%": {
      transform: "rotate3d(0, 0, 1, 60deg)",
      transformOrigin: "top left",
      animationTimingFunction: "ease-in-out",
      opacity: 1,
    },
    "100%": {
      transform: "translate3d(0, 700px, 0)",
      opacity: 0,
    },
  },
};

// const { animation } = jss.createStyleSheet(style).attach();

export default animation;
