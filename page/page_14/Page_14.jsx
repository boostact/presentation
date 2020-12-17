import { Boostact } from "boostact";
import commonClasses from "../common/style";
import classes from "./style";

/**@jsx Boostact.createElement */

const Page = () => {
  return (
    <div>
      <div className={commonClasses.titleBox}>
        <span className={commonClasses.titleNumber}>07</span>
        <span className={commonClasses.title}>팀원 소개</span>
      </div>
      <div className={classes.members}>
        <div className={classes.member}>
          <img
            className={classes.image}
            src="https://ca.slack-edge.com/T019JFET9H7-U019GCE51F0-57de563ea718-512"
          ></img>
          <span className={classes.name}>J001 강경수</span>
          <div className={classes.comment}>
            <img
              className={classes.quotes}
              src="https://www.flaticon.com/svg/static/icons/svg/2087/2087863.svg"
            />
            <p className={classes.say}>
              JavaScript 생태계에 뛰어들고 싶은 개발자
            </p>
            <img
              className={classes.quotes + " " + classes.rightQuote}
              src="https://www.flaticon.com/svg/static/icons/svg/56/56826.svg"
            />
          </div>
        </div>
        <div className={classes.member}>
          <img
            className={classes.image}
            src="https://ca.slack-edge.com/T019JFET9H7-U019P4MNBDG-2061fd3b0b86-512"
          />
          <span className={classes.name}>J013 구승효</span>
          <div className={classes.comment}>
            <img
              className={classes.quotes}
              src="https://www.flaticon.com/svg/static/icons/svg/2087/2087863.svg"
            />
            <p className={classes.say}>만나서 즐거웠고 다음에 또 봅시다.</p>
            <img
              className={classes.quotes + " " + classes.rightQuote}
              src="https://www.flaticon.com/svg/static/icons/svg/56/56826.svg"
            />
          </div>
        </div>
        <div className={classes.member}>
          <img
            className={classes.image}
            src="https://ca.slack-edge.com/T019JFET9H7-U019P4TTH0S-d4419727615f-512"
          />
          <span className={classes.name}>J107 심재익</span>
          <div className={classes.comment}>
            <img
              className={classes.quotes}
              src="https://www.flaticon.com/svg/static/icons/svg/2087/2087863.svg"
            />
            <p className={classes.say}>흥이 많은 개발자</p>
            <img
              className={classes.quotes + " " + classes.rightQuote}
              src="https://www.flaticon.com/svg/static/icons/svg/56/56826.svg"
            />
          </div>
        </div>
        <div className={classes.member}>
          <img
            className={classes.image}
            src="https://ca.slack-edge.com/T019JFET9H7-U01A1RGS0N5-e5bf7d446994-512"
          ></img>
          <span className={classes.name}>J200 지화영</span>
          <div className={classes.comment}>
            <img
              className={classes.quotes}
              src="https://www.flaticon.com/svg/static/icons/svg/2087/2087863.svg"
            />
            <p className={classes.say}>
              배우는게 재미있는 개발자
            </p>
            <img
              className={classes.quotes + " " + classes.rightQuote}
              src="https://www.flaticon.com/svg/static/icons/svg/56/56826.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
