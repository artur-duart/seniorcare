'use strict';

// Capturando elementos do HTML
const hamburguerMenu = document.querySelector('.header__hamburguer-menu');
const menuList = document.querySelector('.menu-list');
let isHamburguerMenuActived = false;

// Funcionamento do Hamburguer Menu
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

// Ouvinte para o Hamburguer Menu funcionar somente na proporção determinada
window.addEventListener('resize', () => {
	if (window.innerWidth >= 820) {
		menuList.style.display = 'flex';
		hamburguerMenu.style.display = 'none';
	} else {
		hamburguerMenu.style.display = 'block';
		if (isHamburguerMenuActived) {
			menuList.style.display = 'block';
		} else {
			menuList.style.display = 'none';
		}
	}
});

// Código do Swiper (Slider)
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

// Validação do Formulário
document
	.getElementById('contactForm')
	.addEventListener('submit', function (event) {
		let name = document.getElementById('name').value;
		let position = document.getElementById('position').value;
		let email = document.getElementById('email').value;
		let phone = document.getElementById('phone').value;
		let address = document.getElementById('address').value;
		let subject = document.getElementById('subject').value;
		let message = document.getElementById('message').value;

		if (
			!name ||
			!position ||
			!email ||
			!phone ||
			!address ||
			!subject ||
			!message
		) {
			alert('Por favor, preencha todos os campos.');
			event.preventDefault();
		} else {
			alert('Dados enviados com sucesso!');
		}
	});
