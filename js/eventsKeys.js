export function downKey (event) {
	const keyDown = event.code;
	const keyPress = document.querySelectorAll('.key');
	const textarea = document.querySelector('.text');

			keyPress.forEach((elem) => {
				if (elem.id === keyDown) {
					elem.classList.add('active');
					if (event.code === 'AltLeft' || event.code === 'AltRight' ||
					event.code === 'ControlLeft' || event.code === 'ControlRight' ||
					event.code === 'ShiftLeft' || event.code === 'ShiftRight' || 
					event.code === 'CapsLock' || event.code === 'Backspace' || event.code === 'MetaLeft' || 
					event.code === 'MetaRight' || event.code === 'Enter' || 
					event.code === 'ArrowUp' || event.code === 'ArrowDown'|| 
					event.code === 'ArrowLeft' || event.code === 'ArrowRight' || 
					event.code === 'Delete' || event.code === 'Space') {
						const shiftUp = document.querySelectorAll('.shift_up');
						const shiftDown = document.querySelectorAll('.shift_down');
						const capsKey = document.querySelector('#CapsLock');
						const capsKeys = document.querySelectorAll('.caps');
						const shiftCapsKey = document.querySelectorAll('.shift_caps');
						if (event.code === 'CapsLock') {
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
						
						if(event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
							shiftDown.forEach((elem) => {
								elem.classList.remove('hidden');
							})
							shiftUp.forEach((elem) => {
								elem.classList.add('hidden');
							})
						}
						
						if(((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && event.getModifierState('CapsLock'))) {
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
					} else if (!(event.code === 'AltLeft' || event.code === 'AltRight' ||
					event.code === 'ControlLeft' || event.code === 'ControlRight' ||
					event.code === 'ShiftLeft' || event.code === 'ShiftRight' || 
					event.code === 'CapsLock' || event.code === 'Backspace' || event.code === 'MetaLeft' || 
					event.code === 'MetaRight' || event.code === 'Enter' || 
					event.code === 'ArrowUp' || event.code === 'ArrowDown'|| 
					event.code === 'ArrowLeft' || event.code === 'ArrowRight' || 
					event.code === 'Delete' || event.code === 'Space')) {
						event.preventDefault();
						if (event.code === 'Tab') {
							textarea.value += '    ';
						} else {
							textarea.value += elem.innerText;
						}
					}
				}
			})
		}

export function upKey (event) {
	const keyDown = event.code;
	const keyPress = document.querySelectorAll('.key');
	keyPress.forEach((elem) => {
		if(elem.id === keyDown) {
			if (event.code === 'CapsLock') {
				return;
			}
			elem.classList.remove('active');
			if(event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
				const shiftUp = document.querySelectorAll('.shift_up');
				const shiftDown = document.querySelectorAll('.shift_down');
				const capsKey = document.querySelector('#CapsLock');
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