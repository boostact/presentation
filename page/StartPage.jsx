import { Boostact } from "boostact";
import { Context } from "../Main";
/**@jsx Boostact.createElement */

const Page = () => {
    const { work, setWork } = Boostact.useContext(Context);
    const timerStart = () => {
        setWork(true);
    };

    return (
        <div onClick={timerStart}>
            <h1>startPage</h1>
        </div>
    );
};

export default Page;
