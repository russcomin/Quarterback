// define element
let collect_button,
 	modal_bg,
 	collect_modal,
 	close,
 	clubs,
 	clubs_arrow,
 	club_menu;

var counter = 0;

// getting dom elements 
collect_button = document.getElementById('collect-rewards');
modal_bg = document.getElementById('modal-bg');
collect_modal = document.getElementsByClassName('modal-box')[0];
close = document.getElementById('close');
clubs = document.getElementById('clubs');
clubs_arrow = document.getElementsByClassName('pick-arrow')[0];
club_menu = document.getElementsByClassName('clubs-menu')[0];


clubs.addEventListener('click', open_clubs_menu);
collect_button.addEventListener('click', open_modal_window);
close.addEventListener('click', close_modal_window);

function open_modal_window() {
	document.body.style.overflow.y = 'hidden';
	modal_bg.style.top = "0px";
	collect_modal.style.top = "80px";
	collect_modal.style.transition = ".9s";
}

function close_modal_window() {
	document.body.style.overflow.y = 'scroll';
	collect_modal.style.top = "-100%";
	collect_modal.style.transition = "2s";	
	modal_bg.style.top = "-100%";
	modal_bg.style.transition = ".4s";
}

function open_clubs_menu() {
	counter++;

	clubs_arrow.style.transition = ".4s";
	clubs_arrow.style.transform = "rotate(180deg)";
	//	
	club_menu.style.display = "block";
	setTimeout(function() {
		club_menu.style.transition = ".7s";
		club_menu.style.opacity = "1";
		club_menu.style.height = "226px";
	},400);

	if (counter == 2) {
		clubs_arrow.style.transition = ".4s";
		clubs_arrow.style.transform = "rotate(-360deg)";	
		setTimeout(function() {
			hide();
		}, 600);
		//
		counter=0;
		let hide = () => {	
			club_menu.style.height = "0px";
			club_menu.style.opacity = "0";
			setTimeout(hideModal, 400);
		}
		function hideModal() {
			club_menu.style.display = "none";
		}
	}
}


let fnatic = document.getElementById('fnatic');
	fnatic.addEventListener('click', function () {
		document.location = "fnatic-club.html"
});

// time-tooltip 

function season_time_tooltip() {
	this.tool_tip_box = document.getElementsByClassName('season-time-i')[0];
	this.tool_tip_box.style.display = "block";
}
function season_time_close() {
	this.tool_tip_box = document.getElementsByClassName('season-time-i')[0];
	this.tool_tip_box.style.display = "none";
}

// season level tooltip

function season_level_tooltip() {
	this.tool_tip_box = document.getElementsByClassName('season-level-i')[0];
	this.tool_tip_box.style.display = "block";
}

function close_level_tooltip() {
	this.tool_tip_box = document.getElementsByClassName('season-level-i')[0];
	this.tool_tip_box.style.display = "none";
}

// my level

function my_level_tooltip() {
	this.tool_tip_box = document.getElementsByClassName('my-season-level-i')[0];
	this.tool_tip_box.style.display = "block";
}

function my_level_close() {
	this.tool_tip_box = document.getElementsByClassName('my-season-level-i')[0];
	this.tool_tip_box.style.display = "none";
}

// club needed

function season_needed_tooltip() {
	this.tool_tip_box = document.getElementsByClassName('season-needed-i')[0];
	this.tool_tip_box.style.display = "block";
}

function close_season_needed() {
	this.tool_tip_box = document.getElementsByClassName('season-needed-i')[0];
	this.tool_tip_box.style.display = "none";
}

function my_needed_tooltip() {
	this.tool_tip_box = document.getElementsByClassName('my-needed-i')[0];
	this.tool_tip_box.style.display = "block";
}

function close_my_needed() {
	this.tool_tip_box = document.getElementsByClassName('my-needed-i')[0];
	this.tool_tip_box.style.display = "none";
}

function owner_card() {
	this.tool_tip_box = document.getElementsByClassName('profile-popup')[0];
	this.tool_tip_box.style.display = "block";
}

function owner_close() {
	this.tool_tip_box = document.getElementsByClassName('profile-popup')[0];
	this.tool_tip_box.style.display = "none";
}
