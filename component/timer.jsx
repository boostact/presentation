import { Boostact } from "boostact";
import { Context } from "../Main";
import classes from "./style";

/** @jsx Boostact.createElement */

const initialValue = {
  seconds: 0,
  minutes: 7,
};

const numPad = (num) => {
  if (typeof num === "number" && num >= 0 && num < 10) {
    num = "0" + num;
  }
  return num;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SECONDS": {
      if (state.seconds === 0) {
        if (state.minutes === 0) {
          return { seconds: 0, minutes: 8 };
        }
        return { seconds: 59, minutes: state.minutes - 1 };
      }
      return { seconds: state.seconds - 1, minutes: state.minutes };
    }
    case "SET_QNA": {
      return { seconds: 0, minutes: 8 };
    }
    default:
      break;
  }
};

let prevTimer = new Date().getSeconds();
let interval;
let clock = false,
  QnA = false;

const Timer = () => {
  const [state, dispatch] = Boostact.useReducer(reducer, initialValue);
  const { states, actions } = Boostact.useContext(Context);

  Boostact.useEffect(() => {
    if (states.work) {
      interval = setInterval(() => {
        const timer = new Date().getSeconds();
        if (prevTimer !== timer) {
          dispatch({ type: "SET_SECONDS" });
        }
        prevTimer = timer;
      }, 500);
      actions.setWork(false);
    }
    if (states.list === "page_14" && !QnA) {
      dispatch({ type: "SET_QNA" });
      QnA = true;
    }
    return (interval) => {
      clearInterval(interval);
    };
  }, [state.seconds, states.work, new Date().getSeconds()]);

  const stopClick = () => {
    if (!clock) {
      clearInterval(interval);
      clock = true;
      return;
    }
    actions.setWork(true);
    clock = false;
  };

  return (
    <div onclick={stopClick} className={classes.timer}>
      <div className={classes.timeBox}>{numPad(0)}</div>
      <div>:</div>
      <div className={classes.timeBox}>{numPad(state.minutes)}</div>
      <div>:</div>
      <div className={classes.timeBox}>{numPad(state.seconds)}</div>
    </div>
  );
};

export default Timer;
