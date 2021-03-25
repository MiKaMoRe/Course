let $ = elem => document.querySelector(elem)

let slider = new Swiper('.slider__content.swiper-container', {
  // Optional parameters
	direction: 'horizontal',
	loop: true,
	slidesPerView: 1,
	simulateTouch: false,
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		dynamicBullets: true
	},
	autoplay: {
		delay: 5000
	},
  // Navigation arrows
	navigation: {
		nextEl: '.slider__button-next',
		prevEl: '.slider__button-prev',
	},
});
let ourClients = new Swiper('.our-clients__slider.swiper-container', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	// If we need pagination
	autoplay: {
		delay: 5000
	},
  	// Navigation arrows
	navigation: {
		nextEl: '.our-clients__button-next',
		prevEl: '.our-clients__button-prev',
	},
	slidesPerView: 5,
	spaceBetween: 20,
	grabCursor: true,
});
