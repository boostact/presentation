import { Boostact } from "boostact";
import classes from "./style";
import Timer from "./timer/Timer";
import commonClasses from "../common/style";

/**@jsx Boostact.createElement */

const Page = () => {
    return (
        <div>
            <div className={commonClasses.titleBox}>
                <span className={commonClasses.titleNumber}>04</span>
                <span className={commonClasses.title}>우리가 직면한 문제</span>
            </div>
            <div className={classes.leftImage}>
                <img
                    className={classes.bob}
                    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcLPPWx%2FbtqQpucNDGz%2FD3W4mXp16kToIshcmfDJnK%2Fimg.jpg"
                ></img>
            </div>
            <div id="boostact" className={classes.rightImage}>
                <div>
                    <Timer />
                </div>
                <div className={classes.stop}>
                    <img
                        className={classes.stopPic}
                        src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FddojMZ%2FbtqQpuqpnu7%2FFvMr2CfEScvLk6oAxRkz9k%2Fimg.png"
                    ></img>
                </div>
            </div>
        </div>
    );
};

export default Page;
