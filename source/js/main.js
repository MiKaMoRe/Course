
const swiper = new Swiper('.slider__content.swiper-container', {
  // Optional parameters
	direction: 'horizontal',
	loop: true,
	slidesPerView: 1,
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
		nextEl: '.button-next',
		prevEl: '.button-prev',
	},
});