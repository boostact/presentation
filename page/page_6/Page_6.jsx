import { Boostact } from "boostact";
import classes from "./style";
import commonClasses from "../common/style";

/**@jsx Boostact.createElement */

const Page = () => {
  const createPicture = () => {
    const pic = document.getElementById("boostact");
    const value = Number(pic.style.opacity) ? 0 : 1;
    console.log(value);
    document.getElementById("boostact").style.opacity = value;
    document.getElementById("boostPic").style.opacity = value;
  };

  return (
    <div>
      <div className={`${commonClasses.titleBox} ${classes.titleEvent}`}>
        <span className={commonClasses.titleNumber}>04</span>
        <span className={commonClasses.title}>우리가 직면한 문제</span>
      </div>
      <div className={classes.leftImage}>
        <img
          className={classes.dog}
          src="https://user-images.githubusercontent.com/43411599/102461684-16613300-408c-11eb-8883-48b15e2a75f0.png
                    "
        ></img>
      </div>
      <div id="boostact" className={classes.rightImage} onClick={createPicture}>
        <img
          id="boostPic"
          className={classes.boostact}
          src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FrA2Ej%2FbtqQjmUlX6f%2FimQAdko3lPqDsc4NV1wQjK%2Fimg.png"
        ></img>
      </div>
    </div>
  );
};

export default Page;
