const openMenu = (nav, active) => {
	nav.classList.add(active);
};

const closeMenu = (nav, active) => {
	nav.classList.remove(active);
};


/*const slideMenu = (openBtn, menu, classActiveMenu, closeTrigger) => {

	const burgerBtn = document.querySelector(openBtn);
	const navigation = document.querySelector(menu);
	const navigationClose = document.querySelectorAll(closeTrigger)
	// console.log(burgerBtn, navigation);
	// console.log(classActiveMenu);
	// console.log(navigationClose);
	burgerBtn.addEventListener('click', () => {
		openMenu(navigation, classActiveMenu);

	});
	navigationClose.forEach(item => {
		item.addEventListener('click', () => {
			closeMenu(navigation, classActiveMenu);
		})
	})
};
1 вариант */

// 2 вариант setting
/*const slideMenu = (setting) => {
	const { openBtn, menu, classActiveMenu, closeTrigger } = setting;
	const burgerBtn = document.querySelector(openBtn);
	const navigation = document.querySelector(menu);
	const navigationClose = document.querySelectorAll(closeTrigger)

	burgerBtn.addEventListener('click', () => {
		openMenu(navigation, classActiveMenu);

	});
	navigationClose.forEach(item => {
		item.addEventListener('click', () => {
			closeMenu(navigation, classActiveMenu);
		})
	})
};*/

// 3 вариант
const slideMenu = ({ openBtn, menu, classActiveMenu, closeTrigger }) => {
	const burgerBtn = document.querySelector(openBtn);
	const navigation = document.querySelector(menu);
	const navigationClose = document.querySelectorAll(closeTrigger)

	burgerBtn.addEventListener('click', () => {
		openMenu(navigation, classActiveMenu);

	});
	navigationClose.forEach(item => {
		item.addEventListener('click', () => {
			closeMenu(navigation, classActiveMenu);
		})
	})
};


export default slideMenu;