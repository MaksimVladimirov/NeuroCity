function validateForm() {
	const name = document.getElementById('name').value;
	const phone = document.getElementById('phone').value;
	const password = document.getElementById('password').value;
	const repeatPassword = document.getElementById('repeatPassword').value;
	const error = document.getElementById('error');
	let errorMessage = '';

	if (!name.match(/^[a-zA-Zа-яА-Я]{3,30}$/)) {
		errorMessage +=
			'Имя должно содержать от 3 до 30 символов, допускается только кириллица/латиница. ';
	}
	if (!phone.match(/^\+?[0-9]{10,15}$/)) {
		errorMessage +=
			'Номер телефона должен содержать от 10 до 15 символов, допускается только цифры и может начинаться с плюса. ';
	}
	if (!password.match(/(?=.*[A-Z])(?=.*[0-9]).{8,40}/)) {
		errorMessage +=
			'Пароль должен содержать от 8 до 40 символов и содержать по крайней мере одну заглавную букву и цифру. ';
	}
	if (password !== repeatPassword) {
		errorMessage += 'Пароли должны совпадать. ';
	}
	if (errorMessage) {
		error.innerHTML = errorMessage;
		return false;
	}
	return true;
}
