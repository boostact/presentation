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
          <img
            className={classes.button}
            onClick={timerStart}
            src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4dd66c52-2a7d-47f3-94af-b5189a346532/ttttt_%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201216T112634Z&X-Amz-Expires=86400&X-Amz-Signature=cd14a2147d8d7134829e1459f237a332753c5c90f2d839e549a784a548d24075&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22ttttt_%281%29.png%22"
          ></img>
        </div>
      </Link>
    </div>
  );
};

export default Page;
