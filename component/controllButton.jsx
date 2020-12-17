import { Boostact, Link } from "boostact";
import classes from "./style";
import { Context } from "../Main";

/** @jsx Boostact.createElement */

const pageList = [
  "/",
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
  "page_15",
];
const listLength = pageList.length;

const ControllButton = () => {
  const { states, actions } = Boostact.useContext(Context);

  let index = pageList.indexOf(states.list);

  let prevLink = "/" + pageList[index - 1];
  let frontLink = "/" + pageList[index + 1];
  if (index < 0) {
    prevLink = "/";
  }
  if (index === listLength - 1) {
    frontLink = "/" + pageList[index];
  }

  const down = () => {
    const idx = pageList.indexOf(states.list);
    if (idx === 0) {
      prevLink = "/page_1";
      actions.setList(pageList[0]);
    }
    actions.setList(pageList[(idx - 1) % listLength]);
  };

  const up = () => {
    const idx = pageList.indexOf(states.list);
    if (idx === listLength - 2 && !states.QnA) {
      actions.setQnA(pageList[idx + 1]);
    } else if (idx < listLength - 2) {
      actions.setList(pageList[(idx + 1) % listLength]);
    }
  };

  return (
    <div>
      <div>
        <Link to={prevLink}>
          <div>
            <button className={classes.leftButton} onClick={down}>
              ◄
            </button>
          </div>
        </Link>
      </div>
      <div>
        <Link to={frontLink}>
          <div>
            <button className={classes.rightButton} onClick={up}>
              ►
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ControllButton;
