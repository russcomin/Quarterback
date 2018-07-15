// define element
let collect_button,
 	modal_bg,
 	collect_modal,
 	close;

// getting dom elements 
collect_button = document.getElementById('collect-rewards');
modal_bg = document.getElementById('modal-bg');
collect_modal = document.getElementsByClassName('modal-box')[0];
close = document.getElementById('close');


collect_button.addEventListener('click', open_modal_window);
close.addEventListener('click', close_modal_window);

function open_modal_window() {
	modal_bg.style.top = "0px";
	collect_modal.style.top = "100px";
	collect_modal.style.transition = ".9s";
}

function close_modal_window() {
	collect_modal.style.top = "-100%";
	collect_modal.style.transition = "2s";	
	modal_bg.style.top = "-100%";
	modal_bg.style.transition = ".4s";
}
