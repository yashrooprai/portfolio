let ageEl = document.getElementById("age");

setInterval(() => {
	let time = (new Date() - new Date(965814620000)) / (1000 * 60 * 60 * 24 * 365.25); // milliseconds per year
	ageEl.innerText = time.toString().substring(0, 12);
}, 50);