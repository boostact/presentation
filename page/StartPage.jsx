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
            src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d5556a61-b7a0-4d7e-8cb7-9d574c4705e4/play-button.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201216T085616Z&X-Amz-Expires=86400&X-Amz-Signature=6e104c779eceff495b7282d5ac317634b471daffaff3050b3482495d2eb5f873&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22play-button.png%22"
          ></img>
        </div>
      </Link>
    </div>
  );
};

export default Page;
