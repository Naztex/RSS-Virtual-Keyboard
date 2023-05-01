export function language () {
	let lng = localStorage.getItem('lng');
	if (!lng) {
		localStorage.setItem('lng', 'en');
	} else {
		lng = localStorage.getItem('lng')
	}
	console.log(lng);
	return lng;
}

export function changeLang (event) {
  if (event.ctrlKey && event.altKey) {
		const rus = document.querySelectorAll('.rus');
		const en = document.querySelectorAll('.eng');

		let lang = localStorage.getItem('lng');
    if (lang === 'en') {
      localStorage.setItem('lng', 'ru');
			rus.forEach((elem) => {
				elem.classList.remove('hidden');
			})
			en.forEach((elem) => {
				elem.classList.add('hidden');
			})
    } else {
      localStorage.setItem('lng', 'en');
			rus.forEach((elem) => {
				elem.classList.add('hidden');
			})
			en.forEach((elem) => {
				elem.classList.remove('hidden');
			})
    }
  }
}