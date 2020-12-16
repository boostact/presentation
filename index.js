import { Boostact } from "boostact";
import { Main } from "./Main";
import Page_2 from "./page/Page_2";
import Page_3 from "./page/Page_3";
/** @jsx Boostact.createElement */

const loadFonts = async () => {
  const font = new FontFace(
    "nanumsquare",
    "url(https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css)"
  );
  await font.load();
  document.fonts.add(font);
  document.body.classList.add("fonts-loaded");
};

loadFonts();

const root = document.getElementById("root");
<<<<<<< HEAD
Boostact.render(<Page_3 />, root);
=======
Boostact.render(<Main />, root);
>>>>>>> 89317492bf9ea0d172c5051a617a9a74c4986044
