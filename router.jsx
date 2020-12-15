import { Boostact, Route } from "boostact";
/** @jsx Boostact.createElement */

import {
  Page_1,
  Page_2,
  Page_3,
  Page_4,
  Page_5,
  Page_6,
  Page_7,
  Page_8,
  Page_9,
  Page_10,
  Page_11,
  Page_12,
  Page_13,
  Page_14,
} from "./page";

const pageList = [
  Page_1,
  Page_2,
  Page_3,
  Page_4,
  Page_5,
  Page_6,
  Page_7,
  Page_8,
  Page_9,
  Page_10,
  Page_11,
  Page_12,
  Page_13,
  Page_14,
];
const PAGE_LENGTH = pageList.length;

const Router = ({ pageNumber }) => {
  const routerList = Array(PAGE_LENGTH)
    .fill(0)
    .map((val, index) => {
      const path = "/examples/page_" + (index + 1);
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
      <Router.Route exact path="/" component={startPage}></Router.Route>
      {routerList}
    </div>
  );
};

export default Router;
