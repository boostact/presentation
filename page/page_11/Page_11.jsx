import { Boostact } from "boostact";
import classes from "./style";
import commonClasses from "../common/style";
import Todo from "./todoList/todoTemplate";
/**@jsx Boostact.createElement */

const Page = () => {
  const [string, setString] = Boostact.useState("안녕하세요");
  const checkString = (e) => {
    setString(e.target.value);
  };
  return (
    <div>
      <div className={commonClasses.titleBox}>
        <span className={commonClasses.titleNumber}>06</span>
        <span className={commonClasses.title}>예제</span>
      </div>
      <div className={classes.entireBox}>
        <Todo></Todo>
      </div>
    </div>
  );
};

export default Page;
