import { Boostact, Route } from "boostact";
/** @jsx Boostact.createElement */

import { pageList } from "./page";
import startPage from "./page/StartPage";

const PAGE_LENGTH = pageList.length;

const Router = ({ pageNumber }) => {
  const routerList = Array(PAGE_LENGTH)
    .fill(0)
    .map((val, index) => {
      const path = "/page_" + (index + 1);
      return (
        <Route.Route
          path={path}
          component={pageList[index]}
          isContained
        ></Route.Route>
      );
    });

  return (
    <div>
      <Route.Route path="/" component={startPage}></Route.Route>
      {routerList}
    </div>
  );
};

export default Router;
