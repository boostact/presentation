import { Boostact } from "boostact";
import Router from "./router";
import Timer from "./component/timer";
import ControllButton from "./component/controllButton";
/** @jsx Boostact.createElement */

const initialValue = {
  work: false,
  list: "/",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_WORK":
      return { work: action.value, list: state.pageList };
    case "SET_LIST":
      return { work: state.work, list: action.value };
  }
};

const Context = Boostact.createContext();

const Main = () => {
  const [states, dispatch] = Boostact.useReducer(reducer, initialValue);
  console.log(states);

  const actions = {
    setWork: (value) => {
      dispatch({ type: "SET_WORK", value });
    },
    setList: (value) => {
      console.log("vlaue", value);
      dispatch({ type: "SET_LIST", value });
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
