import { Boostact } from "boostact";
import classes from "./style";
import commonClasses from "../common/style";
/**@jsx Boostact.createElement */

const Page = () => {
  return (
    <div className={classes.page3}>
      <div>
        <strong className={commonClasses.titleNumber}>02</strong>
        <strong className={commonClasses.title}>왜 부스트액트인가?</strong>
      </div>
      <div className={classes.imageBox}>
        <img
          className={classes.treeImage}
          onClick={(e) => {
            e.target.classList.add(classes.treeAnimation);
          }}
          src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FzD7Ys%2FbtqQss6s0zy%2F2ZHLK3vFgY6va4um3iQzYK%2Fimg.png"
        ></img>
        <span className={classes.framework}>framework</span>
      </div>
    </div>
  );
};

export default Page;
