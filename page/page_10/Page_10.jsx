import { Boostact } from "boostact";
import classes from "./style";
import commonClasses from "../common/style";

/**@jsx Boostact.createElement */

const Page = () => {
    console.log(Boostact.HOOKS);
    return (
        <div>
            <div className={commonClasses.titleBox}>
                <span className={commonClasses.titleNumber}>05</span>
                <span className={commonClasses.title}>우리가 배운것</span>
            </div>
            <div className={classes.bodyContainer}>
                <img
                    className={classes.jjal}
                    src="https://user-images.githubusercontent.com/33454557/102364146-7eb30480-3ff9-11eb-8c06-0d120074bb7e.png"
                ></img>
                <div>
                    <ol className={classes.textContainer}>
                        <li className={classes.textContent}>
                            <b>State hook</b>이 node 위치를
                            <br /> 기억하고 값을 저장하는 방법
                        </li>
                        <li className={classes.textContent}>
                            <b>Effect hook</b>의 호출 시점과
                            <br /> 상태 변화를 감지하는 방법
                        </li>
                        <li className={classes.textContent}>이벤트 위임</li>
                        <li className={classes.textContent}>라우팅</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Page;
