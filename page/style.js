import jss from "jss";
import preset from "jss-preset-default";
import animation from "./common/animation";

jss.setup(preset());

const style = {
    "@keyframes tada": animation.tada,
    button: {
        position: "fixed",
        height: "236px",
        width: "256px",
        right: "calc(50% - 128px)",
        top: "calc(50% - 128px)",
        background: {
            image:
                'url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fdj2T70%2FbtqQu46ItJa%2F0XetUDj5telggmDfgTZUyk%2Fimg.png")',
        },
        "&:hover": {
            animationName: "$tada",
            animationDuration: "1s",
            animationIterationCount: "infinite",
            cursor: "pointer",
            background: {
                image:
                    'url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb1oQNJ%2FbtqQsstxEJJ%2FAu6VDgYl2tJI1OH1J3ZSr0%2Fimg.png")',
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
