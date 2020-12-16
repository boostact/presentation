import { Boostact } from "boostact";
import classes from "./style";
import commonClasses from "../common/style";

/**@jsx Boostact.createElement */

const Page = () => {
  return (
    <div>
      <div className={commonClasses.titleBox}>
        <span className={commonClasses.titleNumber}>07</span>
        <span className={commonClasses.title}>Q & A</span>
      </div>
      <div>
          <img className={classes.babyImage} src="https://user-images.githubusercontent.com/33454557/102326902-53fc8800-3fc8-11eb-9155-412cc8cf12de.png"></img>
      </div>
    </div>
  );
};

export default Page;
