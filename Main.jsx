import { Boostact } from "boostact";
import Router from "./router";
import Timer from "./component/timer";
import ControllButton from "./component/controllButton";
/** @jsx Boostact.createElement */

const initialValue = {
  work: false,
  list: "/",
  seconds: 0,
  minutes: 7,
  QnA: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_WORK":
      return {
        work: action.value,
        list: state.list,
        seconds: state.seconds,
        minutes: state.minutes,
        QnA: state.QnA,
      };
    case "SET_LIST":
      return {
        work: state.work,
        list: action.value,
        seconds: state.seconds,
        minutes: state.minutes,
        QnA: state.QnA,
      };
    case "SET_SECONDS": {
      if (state.seconds === 0) {
        if (state.minutes === 0) {
          return {
            work: state.work,
            list: state.list,
            seconds: 0,
            minutes: 8,
            QnA: state.QnA,
          };
        }
        return {
          work: state.work,
          list: state.list,
          seconds: 59,
          minutes: state.minutes - 1,
          QnA: state.QnA,
        };
      }
      return {
        work: state.work,
        list: state.list,
        seconds: state.seconds - 1,
        minutes: state.minutes,
        QnA: state.QnA,
      };
    }
    case "SET_QNA": {
      return {
        work: state.work,
        list: action.value,
        seconds: 0,
        minutes: 8,
        QnA: true,
      };
    }
  }
};

const Context = Boostact.createContext();

const Main = () => {
  const [states, dispatch] = Boostact.useReducer(reducer, initialValue);

  const actions = {
    setWork: (value) => {
      dispatch({ type: "SET_WORK", value });
    },
    setList: (value) => {
      dispatch({ type: "SET_LIST", value });
    },
    setSeconds: () => {
      dispatch({ type: "SET_SECONDS" });
    },
    setQnA: (value) => {
      dispatch({ type: "SET_QNA", value });
    },
  };

  return (
    <Context.Provider value={{ states, actions }}>
      <div style={{ fontFamily: "nanumsquare" }}>
        <Timer />
      </div>
      <div>
        <Router />
      </div>
      <div>
        <ControllButton />
      </div>
    </Context.Provider>
  );
};

export { Main, Context };
