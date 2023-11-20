'use strict';

const hamburguerMenu = document.querySelector('.header__hamburguer-menu');
const menuList = document.querySelector('.menu-list');
let isHamburguerMenuActived = false;

hamburguerMenu.onclick = () => {
	isHamburguerMenuActived = !isHamburguerMenuActived;

	if (isHamburguerMenuActived) {
		hamburguerMenu.style.backgroundImage = "url('../assets/img/Close.svg')";
		menuList.style.display = 'block';
	} else {
		hamburguerMenu.style.backgroundImage = "url('../assets/img/Menu.svg')";
		menuList.style.display = 'none';
	}
};

var swiper = new Swiper('.mySwiper', {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
