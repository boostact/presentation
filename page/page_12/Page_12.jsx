import { Boostact } from "boostact";
import classes from "./style";
import commonClasses from "../common/style";
/**@jsx Boostact.createElement */

const Page = () => {
    const [string, setString] = Boostact.useState("안녕하세요");
    const checkString = (e) => {
        setString(e.target.value);
    };
    console.log(string);
    return (
        <div>
            <div className={commonClasses.titleBox}>
                <span className={commonClasses.titleNumber}>07</span>
                <span className={commonClasses.title}>예제</span>
            </div>
            <div className={classes.entireBox}>
                <div className={classes.inputBox}>
                    <textarea
                        className={classes.areaBox}
                        onInput={checkString}
                    ></textarea>
                </div>
                <div className={classes.textBox}>
                    <div>
                        <span>{string}</span>
                    </div>
                </div>
                <div className={classes.explaination}>
                    <span
                        dangerouslySetInnerHTML={marked(String(string))}
                    ></span>
                </div>
                <pre className={classes.codeBox}>
                    <code
                        className="javascript hljs"
                        dangerouslySetInnerHTML={
                            hljs.highlight("javascript", String(string)).value
                        }
                        style={{
                            marginRight: "20px",
                            color: "white",
                            borderRadius: "30px",
                        }}
                    ></code>
                </pre>
            </div>
        </div>
    );
};

export default Page;
