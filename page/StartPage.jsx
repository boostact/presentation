import { Boostact } from "boostact";
import { Context } from "../Main";
/**@jsx Boostact.createElement */

const Page = () => {
  const { setWork } = Boostact.useContext(Context);
  const timerStart = () => {
    setWork(true);
    console.log("hi");
  };

  return (
    <div onClick={timerStart}>
      <h1>startPage</h1>
    </div>
  );
};

export default Page;
