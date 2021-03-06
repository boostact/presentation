import { Boostact } from "boostact";
import { Main } from "./Main";
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
Boostact.render(<Main />, root);
