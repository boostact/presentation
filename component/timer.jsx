import { Boostact } from "boostact";
import { Context } from "../Main";
import classes from "./style";

/** @jsx Boostact.createElement */

const numPad = (num) => {
  if (typeof num === "number" && num >= 0 && num < 10) {
    num = "0" + num;
  }
  return num;
};

let prevTimer = new Date().getSeconds();
let interval;
let clock = false;
let style = classes.timer;

const Timer = () => {
  const { states, actions } = Boostact.useContext(Context);

  Boostact.useEffect(() => {
    if (states.work) {
      interval = setInterval(() => {
        const timer = new Date().getSeconds();
        if (prevTimer !== timer) {
          actions.setSeconds();
        }
        prevTimer = timer;
      }, 500);
    }
    actions.setWork(false);

    if (states.minutes === 0) {
      if (states.seconds === 0) {
        actions.setQnA("page_15");
        window.router.navigateTo("/page_15");
        return;
      }
      style = classes.timerDeadLine;
    } else {
      style = classes.timer;
    }
    return (interval) => {
      clearInterval(interval);
    };
  }, [states.seconds, states.work, new Date().getSeconds()]);

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
    <div onclick={stopClick} className={style}>
      <div className={classes.timeBox}>{numPad(0)}</div>
      <div>:</div>
      <div className={classes.timeBox}>{numPad(states.minutes)}</div>
      <div>:</div>
      <div className={classes.timeBox}>{numPad(states.seconds)}</div>
    </div>
  );
};

export default Timer;
