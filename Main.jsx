import { Boostact } from "boostact";
import Router from "./router";
import Timer from "./component/timer";
/** @jsx Boostact.createElement */

const Context = Boostact.createContext();

const Main = () => {
    const [pageNumber, setPage] = Boostact.useState(0);

    const [work, setWork] = Boostact.useState(false);

    return (
        <Context.Provider value={{ work, setWork }}>
            <div style={{ fontFamily: "nanumsquare" }}>
                <Timer />
            </div>
            <div>
                <Router pageNumber={pageNumber} />
            </div>
        </Context.Provider>
    );
};
export { Main, Context };
