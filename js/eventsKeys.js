export function downKey (event) {
	let keyDown = event.code;
	const keyPress = document.querySelectorAll('.key');
	const textarea = document.querySelector('.text');

			keyPress.forEach((elem) => {
				if (elem.id === keyDown) {
					elem.classList.add('active');
					if (keyDown === 'AltLeft' || keyDown === 'AltRight' ||
					keyDown === 'ControlLeft' || keyDown === 'ControlRight' ||
					keyDown === 'ShiftLeft' || keyDown === 'ShiftRight' || 
					keyDown === 'CapsLock' || keyDown === 'Backspace' || event.code === 'MetaLeft' || 
					keyDown === 'MetaRight' || keyDown === 'Enter' || 
					keyDown === 'ArrowUp' || keyDown === 'ArrowDown'|| 
					keyDown === 'ArrowLeft' || keyDown === 'ArrowRight' || 
					keyDown === 'Delete' || keyDown === 'Space') {
						const shiftUp = document.querySelectorAll('.shift_up');
						const shiftDown = document.querySelectorAll('.shift_down');
						const capsKey = document.querySelector('#CapsLock');
						const capsKeys = document.querySelectorAll('.caps');
						const shiftCapsKey = document.querySelectorAll('.shift_caps');
						if (keyDown === 'CapsLock') {
							if (event.getModifierState('CapsLock')) {
								capsKey.classList.add('active');
								shiftUp.forEach((elem) => {
									elem.classList.add('hidden');
								})
								capsKeys.forEach((elem) => {
									elem.classList.remove('hidden');
								})
							} else {
								capsKey.classList.remove('active');
								shiftUp.forEach((elem) => {
									elem.classList.remove('hidden');
								})
								capsKeys.forEach((elem) => {
									elem.classList.add('hidden');
								})
							}
						}
						
						if(keyDown === 'ShiftLeft' || keyDown === 'ShiftRight') {
							shiftDown.forEach((elem) => {
								elem.classList.remove('hidden');
							})
							shiftUp.forEach((elem) => {
								elem.classList.add('hidden');
							})
						}
						
						if(((keyDown === 'ShiftLeft' || keyDown === 'ShiftRight') && event.getModifierState('CapsLock'))) {
							capsKeys.forEach((elem) => {
								elem.classList.add('hidden');
							})
							shiftDown.forEach((elem) => {
								elem.classList.add('hidden');
							})
							shiftCapsKey.forEach((elem) => {
								elem.classList.remove('hidden');
							})
						}
						textarea.focus();
						return;
					} else if (!(keyDown === 'AltLeft' || keyDown === 'AltRight' ||
					keyDown === 'ControlLeft' || keyDown === 'ControlRight' ||
					keyDown === 'ShiftLeft' || keyDown === 'ShiftRight' || 
					keyDown === 'CapsLock' || keyDown === 'Backspace' || keyDown === 'MetaLeft' || 
					keyDown === 'MetaRight' || keyDown === 'Enter' || 
					keyDown === 'ArrowUp' || keyDown === 'ArrowDown'|| 
					keyDown === 'ArrowLeft' || keyDown === 'ArrowRight' || 
					keyDown === 'Delete' || keyDown === 'Space')) {
						event.preventDefault();
						if (keyDown === 'Tab') {
							textarea.value += '    ';
						} else if (keyDown === 'Space') {
							textarea.focus();
							textarea.value += '&nbsp';
						} else {
							textarea.value += elem.innerText;
						}
					}
				}
			})
		}

export function upKey (event) {
	let keyDown = event.code;
	const keyPress = document.querySelectorAll('.key');
	keyPress.forEach((elem) => {
		if(elem.id === keyDown) {
			if (keyDown === 'CapsLock') {
				return;
			}
			elem.classList.remove('active');
			if(keyDown === 'ShiftLeft' || keyDown === 'ShiftRight') {
				const shiftUp = document.querySelectorAll('.shift_up');
				const shiftDown = document.querySelectorAll('.shift_down');
				const capsKeys = document.querySelectorAll('.caps');
				const shiftCapsKey = document.querySelectorAll('.shift_caps');
				if (event.getModifierState('CapsLock')) {
					capsKeys.forEach((elem) => {
						elem.classList.remove('hidden');
					})
					shiftCapsKey.forEach((elem) => {
						elem.classList.add('hidden');
					})
				} else {
					shiftDown.forEach((elem) => {
						elem.classList.add('hidden');
					})
					shiftUp.forEach((elem) => {
						elem.classList.remove('hidden');
					})
				}
			}
		}
	})
}

export function handleClick(event) {
  const eventMouse = new KeyboardEvent('keydown', {
    code: event.target.id,
  });
	downKey (eventMouse)
}

export function handleKeyUp(event) {
  const eventMouse = new KeyboardEvent('keyup', {
    code: event.target.id,
  });
	upKey (eventMouse)
}
