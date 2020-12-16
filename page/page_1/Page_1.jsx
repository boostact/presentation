import { Boostact } from "boostact";
import classes from "./style";
/**@jsx Boostact.createElement */

const Page = () => {
  return (
    <div>
      <div className={classes.banner}>
        <img
          className={classes.bannerImage}
          src="https://user-images.githubusercontent.com/43411599/102326060-41ce1a00-3fc7-11eb-9f4c-de0fa1ceea05.png"
        ></img>
      </div>

      <div className={classes.members}>
        <span className={classes.freeD}>자유프로젝트 D조</span>
        <span className={classes.member}>강경수 J001</span>
        <span className={classes.member}>구승효 J013</span>
        <span className={classes.member}>심재익 J107</span>
        <span className={classes.member}>지화영 J200</span>
      </div>
    </div>
  );
};

export default Page;
