import { Boostact, Link } from "boostact";
import classes from "./style";

import { Context } from "../Main";

/** @jsx Boostact.createElement */

const pageList = [
  "page_1",
  "page_2",
  "page_3",
  "page_4",
  "page_5",
  "page_6",
  "page_7",
  "page_8",
  "page_9",
  "page_10",
  "page_11",
  "page_12",
  "page_13",
  "page_14",
];
const listLength = pageList.length;

const ControllButton = () => {
  const { states, actions } = Boostact.useContext(Context);

  const index = pageList.indexOf(states.list);
  let prevLink = "/" + pageList[index - 1];
  let frontLink = "/" + pageList[index + 1];
  if (index <= 0) {
    prevLink = "/";
  }
  if (index === pageList.length - 1) {
    frontLink = "/";
  }

  const down = () => {
    const idx = pageList.indexOf(states.list);
    actions.setList(pageList[(idx - 1) % listLength]);
  };

  const up = () => {
    const idx = pageList.indexOf(states.list);
    actions.setList(pageList[(idx + 1) % listLength]);
  };

  return (
    <div className={classes.leftButton}>
      <div className={classes.leftButton}>
        <Link to={prevLink}>
          <div>
            <button onClick={down}>◄</button>
          </div>
        </Link>
      </div>
      <div className={classes.rightButton}>
        <Link to={frontLink}>
          <div>
            <button onClick={up}>►</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ControllButton;
