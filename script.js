const toggleSwitch = document.querySelector('input[type="checkbox"]');

function switchTheme(event) {
	console.log(event.target.checked)
	if (event.target.checked) {
		document.documentElement.setAttribute('data-theme', 'dark')
	} else {
		document.documentElement.setAttribute('data-theme', 'root')
	}
}


toggleSwitch.addEventListener('change', switchTheme);