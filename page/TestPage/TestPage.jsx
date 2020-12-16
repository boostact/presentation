import { Boostact } from "boostact";
import classes from "./style";
import vm from "vm";

/*
vm.runInContext(
    `
() => {
    const vRoot = document.getElementById("virtualRoot");
    const myObj = Boostact.createElement("div", {
        nodeValue: "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
    });
    Boostact.render(myObj, vRoot);
}();
`
);
*/

/**@jsx Boostact.createElement */

const Page = () => {
    const vRender = () => {
        let string = document.getElementById("codeBox").value;
        string = babel.transform(string).code;
        let myObj = {
            root: document.getElementById("virtualRoot"),
            Boostact: Boostact,
        };
        //const Object = Boostact.createElement("span"); root.appendChild(document.createElement('span'));
        // const Object = Boostact.createElement("span"); Boostact.render(<Object/>, root);
        myObj = vm.createContext(myObj);
        vm.runInContext(
            string,
            // "const myFunction = eval(string);",
            myObj
        );
        console.log("myFunction work!");
    };

    return (
        <div className={classes.codeSandBox}>
            <div className={classes.codeBox}>
                <input
                    id="codeBox"
                    className={classes.code}
                    onChange={vRender}
                ></input>
            </div>
            <div className={classes.paintBox}>
                <div className={classes.paint}>
                    <div id="virtualRoot" className={classes.virtualRoot}>
                        this element's id is 'virtualRoot'
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
