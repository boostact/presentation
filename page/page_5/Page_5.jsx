import { Boostact } from "boostact";
import classes from "./style";
import commonClasses from "../common/style";

/**@jsx Boostact.createElement */

const Page = () => {
    return (
        <div>
            <div className={commonClasses.titleBox}>
                <span className={commonClasses.titleNumber}>03</span>
                <span className={commonClasses.title}>부스트액트의 조건</span>
            </div>
            <div className={classes.radiousContainer}>
                <div className={`${classes.radious} ${classes.red}`}>
                    <div className={classes.radiousText}>JSX, HOOK</div>
                </div>
                <div className={`${classes.radious} ${classes.blue}`}>
                    <div className={classes.radiousText}>상태관리와 가상돔</div>
                </div>
                <div className={`${classes.radious} ${classes.green}`}>
                    <div className={classes.radiousText}>SPA에서의 라우팅</div>
                </div>
            </div>
        </div>
    );
};

export default Page;
