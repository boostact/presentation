import { Boostact } from "boostact";
import classes from "./style";
import commonClasses from "../common/style";

/**@jsx Boostact.createElement */

const Page = () => {
  return (
    <div>
      <div className={commonClasses.titleBox}>
        <span className={commonClasses.titleNumber}>05</span>
        <span className={commonClasses.title}>우리가 배운것</span>
      </div>
      <div className={classes.bodyContainer}>
        <img
          className={classes.jjal}
          src="https://user-images.githubusercontent.com/33454557/102366718-524cb780-3ffc-11eb-84af-46f32d8b22cf.png"
        ></img>
        <div>
          <ol className={classes.textContainer}>
            <li className={classes.textContent}>JSX를 HTML로 바꾸는 법</li>
            <li className={classes.textContent}>가상 DOM이 필요한 이유</li>
            <li className={classes.textContent}>
              가상 DOM의 Diff 알고리즘 최적화
            </li>
            <li className={classes.textContent}>Key Attribute</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Page;
