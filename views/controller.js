let close_counter = 1;

let openButton;

openButton = document.getElementsByClassName('arrow')[0];
openButton.addEventListener('click', openMenu);

let modal = document.getElementsByClassName('clubs-menu')[0];
let arrow_img = document.getElementsByClassName('arrow-img')[0];

let menu_wrapper = document.getElementsByClassName('menu-wrapper')[0];

function closeMenu() {
	//rotate arrow
	arrow_img.style.transition = ".3s";
	arrow_img.style.transform = "rotate(0deg)";
	//close modal
	modal.style.transition = ".3s";
	modal.style.height = "0px";
	
	menu_wrapper.style.display = "none";

	openButton.style.background = "none";

	close_counter = 1;
}

function openMenu() {

	arrow_img.style.transition = ".3s";
	arrow_img.style.transform = "rotate(180deg)";
	
	openButton.style.background = "#293545";

	menu_wrapper.style.display = "block";

	modal.style.transition = ".3s";
	modal.style.height = "240px";
	close_counter++;
	if (close_counter > 2) { closeMenu(); }
}

