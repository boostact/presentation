import { Boostact, Link } from "boostact";
import { Context } from "../Main";
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
          <h1 onClick={timerStart}>startPage</h1>
        </div>
      </Link>
    </div>
  );
};

export default Page;
