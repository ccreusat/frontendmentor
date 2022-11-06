const interactiveRange = () => {
	"use strict";
	const sliderContainer = document.querySelector('.js-slider');
	const priceContainer = document.querySelector('.js-price');
	const viewsContainer = document.querySelector('.js-views');
	const progressBar = document.querySelector('.js-progress');
	const checkbox = document.getElementById('billing');
	let discount = 1;

	function getInfo() {
		let value = parseInt(sliderContainer.value);
		switch (value) {
			case 1:
				viewsContainer.innerHTML = "10K";
				progressBar.style.width = 0 + "%";
				priceContainer.innerHTML = setPrice(8);
				break;
			case 2:
				viewsContainer.innerHTML = "50K";
				progressBar.style.width = 25 + "%";
				priceContainer.innerHTML = setPrice(12);
				break;
			case 3:
				viewsContainer.innerHTML = "100K";
				progressBar.style.width = 50 + "%";
				priceContainer.innerHTML = setPrice(16);
				break;
			case 4:
				viewsContainer.innerHTML = "500K";
				progressBar.style.width = 75 + "%";
				priceContainer.innerHTML = setPrice(24);
				break;
			case 5:
				viewsContainer.innerHTML = "1M";
				progressBar.style.width = 100 + "%";
				priceContainer.innerHTML = setPrice(36);
				break;
			default:
				viewsContainer.innerHTML = "100K";
				progressBar.style.width = 50 + "%";
				priceContainer.innerHTML = setPrice(8);
		}
	}

	function setPrice(price) {
		return "$" + price * discount + ".00";
	}

	function applyDiscount() {
		if (checkbox.checked === true) discount = 0.75;
		if (checkbox.checked === false) discount = 1;
		getInfo();
	}

	getInfo();
	sliderContainer.oninput = () => getInfo(sliderContainer);
	checkbox.onclick = () => applyDiscount();
}