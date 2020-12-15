import { Boostact } from "boostact";
/** @jsx Boostact.createElement */
const Main = () => {
  const [pageNumber, setPage] = Boostact.useState(0);
  return (
    <div>
      <div>
        <Timer />
      </div>
      <div>
        <Router pageNumber={pageNumber} />
      </div>
    </div>
  );
};
export default Main;
