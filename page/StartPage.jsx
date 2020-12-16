import { Boostact, Link } from "boostact";
import { Context } from "../Main";
import classes from "./style";
/**@jsx Boostact.createElement */

const Page = () => {
  const { actions } = Boostact.useContext(Context);

  const timerStart = () => {
    actions.setWork(true);
  };

  return (
    <div>
      <Link to={"/page_1"}>
        <div>
          <div className={classes.button} onClick={timerStart}></div>
        </div>
      </Link>
      <div className={classes.title}>"4주"만에 만드는 React</div>
    </div>
  );
};

export default Page;
