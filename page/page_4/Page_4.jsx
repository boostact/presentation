import { Boostact } from "boostact";
import classes from "./style";
import commonClasses from "../common/style";

/**@jsx Boostact.createElement */

const Page = () => {
    return (
        <div className={classes.page4}>
            <div>
                <strong className={commonClasses.titleNumber}>02</strong>
                <strong className={commonClasses.title}>
                    왜 부스트액트인가?
                </strong>
            </div>

            <div className={classes.JSTree}>
                <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FYu4WN%2FbtqQnY55cfp%2F6vwEkjrtqfjxGKB4SGGn4k%2Fimg.png"></img>
            </div>
        </div>
    );
};

export default Page;
