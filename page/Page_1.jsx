import { Boostact } from "boostact";
import classes from "./page_1/style";
/**@jsx Boostact.createElement */

const Page = () => {
  return (
    <div>
      <div className={classes.banner}>
        <span className={classes.bannerText + " " + classes.bannerTextRotated}>
          F
        </span>
        <span
          className={
            classes.bannerText +
            " " +
            classes.bannerTextRotated +
            " " +
            classes.bannerTextRotated_2
          }
        >
          R
        </span>{" "}
        <span
          className={
            classes.bannerText +
            " " +
            classes.bannerTextRotated +
            " " +
            classes.bannerTextRotated_3
          }
        >
          E
        </span>{" "}
        <span
          className={
            classes.bannerText +
            " " +
            classes.bannerTextRotated +
            " " +
            classes.bannerTextRotated_4
          }
        >
          E
        </span>
        <h1 className={classes.bannerText + " " + classes.bannerTitle}>
          Boostact
        </h1>
        <img
          className={classes.bannerImage}
          src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg"
        ></img>
      </div>

      <div className={classes.members}>
        <span className={classes.freeD}>자유프로젝트 D조</span>
        <span className={classes.member}>- 강경수</span>
        <span className={classes.member}>- 구승효</span>
        <span className={classes.member}>- 심재익</span>
        <span className={classes.member}>- 지화영</span>
      </div>
    </div>
  );
};

export default Page;
