import { language, changeLang } from "./js/language.js";
import { loader } from "./js/loader.js";
import { downKey, handleClick, handleKeyUp, upKey } from "./js/eventsKeys.js";
language();
loader();

document.addEventListener('keydown', changeLang);

document.addEventListener('keydown', downKey);
document.addEventListener('keyup', upKey);
document.addEventListener('load', downKey);

document.addEventListener('mousedown', handleClick);

document.addEventListener('mouseup', handleKeyUp);
