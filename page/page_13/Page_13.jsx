import { Boostact } from "boostact";
import classes from "./style";
import commonClasses from "../common/style";

/**@jsx Boostact.createElement */

const Page = () => {
  return (
    <div>
      <div className={commonClasses.titleBox}>
        <span className={commonClasses.titleNumber}>07</span>
        <span className={commonClasses.title}>
          자동차를 만든다고 운전을 잘하는것은 아니다
        </span>
      </div>
      <div className={classes.container}>
        <span className={`${classes.contentString} ${classes.red}`}>
          개구리를 해부하는것보다 만드는게 더 이해하기 좋다
        </span>
        <div className={`${classes.contentString}`}>
          자동차를 만든다고 무조건 운전을 잘하는건 아니다
        </div>
        <img
          className={classes.jjal}
          src="https://user-images.githubusercontent.com/33454557/102347707-1efe2e80-3fe4-11eb-97e7-3666c8f805f6.gif"
        ></img>
      </div>
    </div>
  );
};

export default Page;
