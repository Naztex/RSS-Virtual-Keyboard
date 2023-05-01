import { language, changeLang } from "./js/language.js";
import { loader } from "./js/loader.js";
import { downKey, upKey } from "./js/eventsKeys.js";
language();
loader();

document.addEventListener('keydown', changeLang);

document.addEventListener('keydown', downKey);
document.addEventListener('keyup', upKey);
document.addEventListener('load', downKey);