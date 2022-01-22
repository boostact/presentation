import { Boostact } from "boostact";
import classes from "./style";
import commonClasses from "../common/style";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

/**@jsx Boostact.createElement */

const string1 = marked.parse(`
# 지금 "삭제" 영어로 써보실래요?
`);

const highlight1 = hljs.highlight(
    "javascript",
    `
const determineState = (curChild, vChild) => {
  const sameType = curChild && vChild && curChild.type === vChild.type;
  if (vChild && vChild.parent.effectTag === "PLACEMENT") {
    vChild.alternate = curChild;
    vChild.dom = null;
    vChild.effectTag = "PLACEMENT";
  } else if (sameType) {
    vChild.alternate = curChild;
    vChild.dom = curChild.dom;
    if (isUnchanged(curChild, vChild)) {
      vChild.effectTag = "NONE";
      return;
    }
    vChild.effectTag = "UPDATE";
  } else if (!vChild && !sameType) {
    curChild.effectTag = "DELETION";
    curChild.child = null;
    deletionQueue.push(curChild);
  } else if (!sameType) {
    vChild.alternate = curChild;
    vChild.dom = null;
    vChild.effectTag = "PLACEMENT";
  }

  if (vChild && curChild && curChild.props.dangerouslySetInnerHTML) {
    vChild.alternate = curChild;
    vChild.dom = null;
    vChild.effectTag = "PLACEMENT";
  }
};
  `
).value;

const string2 = marked.parse(`
# babel은 optional chaining 몰라요.
`);

const highlight2 = hljs.highlight(
    "javascript",
    `
const reflectDOM = (node) => {
  let currentNode = node;
  deletionQueue.forEach((node) => node.parent.dom.removeChild(node.dom));
  deletionQueue.length = 0;

  while (currentNode) {
    switch (currentNode.effectTag) {
      case "PLACEMENT":
        placeNode(currentNode);
        break;
      case "UPDATE":
        updateNode(currentNode);
        break;
      case "NONE":
        break;
      default:
        throw new Error("reflectDOM : currentNode.effectTag is undefined.");
    }
    if(Object.keys(currentNode.props).some((prop) => prop.startsWith("on"))) eventModule.add(currentNode);
  
    if (currentNode.child) {
      currentNode = currentNode.child;
      continue;
    }

    if (currentNode.sibling) {
      currentNode = currentNode.sibling;
      continue;
    }

    while (currentNode.parent && !currentNode.parent.sibling) {
      currentNode = currentNode.parent;
    }
    currentNode = currentNode.parent && currentNode.parent.sibling;
  }
};    
  `
).value;

const Page = () => {
    return (
        <div>
            <div className={commonClasses.titleBox}>
                <span className={commonClasses.titleNumber}>04</span>
                <span className={commonClasses.title}>우리가 직면한 문제</span>
            </div>
            <div className={classes.entireBox}>
                <div className={classes.leftCode}>
                    <div
                        className={classes.explaination}
                        dangerouslySetInnerHTML={string1}
                    />
                    <pre className={classes.codeBox}>
                        <code
                            className="javascript hljs"
                            dangerouslySetInnerHTML={highlight1}
                            style={{
                                marginRight: "20px",
                                color: "white",
                                borderRadius: "30px",
                            }}
                        ></code>
                    </pre>
                </div>
                <div className={classes.rightCode}>
                    <div
                        className={classes.explaination}
                        dangerouslySetInnerHTML={string2}
                    />
                    <pre className={classes.codeBox}>
                        <code
                            className="javascript hljs"
                            dangerouslySetInnerHTML={highlight2}
                            style={{
                                marginRight: "20px",
                                color: "white",
                                borderRadius: "30px",
                            }}
                        ></code>
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default Page;
