import { Boostact } from "boostact";
import classes from "./style";
import commonClasses from "../common/style";
/**@jsx Boostact.createElement */

const Page = () => {
    return (
        <div className={classes.page2}>
            <div className={classes.leftSide}>
                <div className={commonClasses.titleBox}>
                    <strong className={commonClasses.titleNumber}>01</strong>
                    <strong className={commonClasses.title}>
                        자유프로젝트가 된 이유
                    </strong>
                    <div className={classes.chatImgBox}>
                        <img
                            className={classes.chatImg}
                            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FDf9rq%2FbtqQlKUHP61%2FygBFCa2IanxDKDjIkgYcDK%2Fimg.png"
                        ></img>
                        <p className={classes.imgDescription}>
                            처음 만나서 행복했던 우리.jpg
                        </p>
                    </div>
                </div>
            </div>
            <div className={classes.rightSide}>
                <img
                    className={classes.image}
                    src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FZg9pC%2FbtqQnZjr6ME%2F6fRExOswrbDPeQscwlkJF1%2Fimg.png"
                ></img>
            </div>
        </div>
    );
};

export default Page;
