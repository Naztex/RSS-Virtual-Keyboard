import { KEYBOARD } from "./keyboard.js";

export function loader () {
	const page = document.querySelector('body');
	const wrapper = document.createElement('div');
	const title = document.createElement('h1');
	const textArea = document.createElement('textarea');
	const keyboard = document.createElement('div');
	const description = document.createElement('p');
	wrapper.classList.add('wrapper');
	title.classList.add('title');
	textArea.classList.add('text');
	keyboard.classList.add('keyboard');
	description.classList.add('description');
	description.innerText = 'Клавиатура создана в операционной системе Windows. Для переключения языка комбинация: левыe shift + alt'
	title.innerText = 'RSS Virtual Keyboard';
	page.append(wrapper);
	wrapper.append(title);
	wrapper.append(textArea);
	wrapper.append(keyboard);
	wrapper.append(description);
	for (let i = 0; i < 5; i++) {
		const keyboardInner = document.createElement('div');
		keyboardInner.classList.add('inner');
		keyboard.append(keyboardInner);
		if(i === 0) {
			renderRow (getLengthRow, i, keyboardInner, getNumberElement);
		} else if (i === 1) {
			renderRow (getLengthRow, i, keyboardInner, getNumberElement);
		} else if (i === 2) {
			renderRow (getLengthRow, i, keyboardInner, getNumberElement);
		} else if (i === 3) {
			renderRow (getLengthRow, i, keyboardInner, getNumberElement);
		} else if (i === 4) {
			renderRow (getLengthRow, i, keyboardInner, getNumberElement);
		}
	}
}

function getLengthRow (i) {
	let length = 0;
		if(i === 0) {
			length = 14;
		} else if (i === 1) {
			length = 29;
		} else if (i === 2) {
			length = 42;
		} else if (i === 3) {
			length = 55;
		} else if (i === 4) {
			length = 64;
		}
		return length;
	}
function getNumberElement (i) {
	let count = 0;
		if(i === 0) {
			count = 0;
		} else if (i === 1) {
			count = 14;
		} else if (i === 2) {
			count = 29;
		} else if (i === 3) {
			count = 42;
		} else if (i === 4) {
			count = 55;
		}
		return count;
}
function renderRow (getLengthRow, i, keyboardInner, getNumberElement) {
	for(let j = getNumberElement(i); j < getLengthRow(i); j++) {
		const key = document.createElement('div');
		const currentLng = localStorage.getItem('lng');
		key.id = KEYBOARD[j].codeKey;
		key.classList.add('key');
		keyboardInner.append(key);
		const keyRus = document.createElement('span');
		keyRus.classList.add('rus');
		key.append(keyRus);
		const keyEng = document.createElement('span');
		keyEng.classList.add('eng');
		key.append(keyEng);
	
		if (currentLng === 'en') {
			keyRus.classList.add('hidden');
		} else {
			keyEng.classList.add('hidden');
		}
		for (let k = 0; k < 4; k++) {
			let keyInnerRus = document.createElement('span');
			let keyInnerEng = document.createElement('span');
			if(k === 0) {
				keyRus.append(keyInnerRus);
				keyEng.append(keyInnerEng);
				keyInnerRus.classList.add('shift_up');
				keyInnerEng.classList.add('shift_up');
				keyInnerRus.innerText = KEYBOARD[j].rus;
				keyInnerEng.innerText = KEYBOARD[j].eng;
			} else if (k === 1) {
				keyRus.append(keyInnerRus);
				keyEng.append(keyInnerEng);
				keyInnerRus.classList.add('shift_down');
				keyInnerEng.classList.add('shift_down');
				keyInnerRus.classList.add('hidden');
				keyInnerEng.classList.add('hidden');
				keyInnerRus.innerText = KEYBOARD[j].rusShift;
				keyInnerEng.innerText = KEYBOARD[j].engShift;
			} else if (k === 2) {
				keyRus.append(keyInnerRus);
				keyEng.append(keyInnerEng);
				keyInnerRus.classList.add('caps');
				keyInnerEng.classList.add('caps');
				keyInnerRus.classList.add('hidden');
				keyInnerEng.classList.add('hidden');
				keyInnerRus.innerText = KEYBOARD[j].rus;
				keyInnerEng.innerText = KEYBOARD[j].eng;
			} else if (k === 3) {
				keyRus.append(keyInnerRus);
				keyEng.append(keyInnerEng);
				keyInnerRus.classList.add('shift_caps');
				keyInnerEng.classList.add('shift_caps');
				keyInnerRus.classList.add('hidden');
				keyInnerEng.classList.add('hidden');
				keyInnerRus.innerText = KEYBOARD[j].rusShift;
				keyInnerEng.innerText = KEYBOARD[j].engShift;
			}
		}
	}
}
