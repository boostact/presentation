import { Boostact, Route } from "boostact";
/** @jsx Boostact.createElement */

import { pageList } from "./page";
import startPage from "./page/StartPage";

const PAGE_LENGTH = pageList.length;

const Router = () => {
    const routerList = Array(PAGE_LENGTH)
        .fill(0)
        .map((val, index) => {
            const path = "/page_" + (index + 1);
            return (
                <Route
                    exact
                    path={path}
                    component={pageList[index]}
                    isContained
                ></Route>
            );
        });

    return (
        <div>
            <Route exact path="/" component={startPage}></Route>
            {routerList}
        </div>
    );
};

export default Router;
