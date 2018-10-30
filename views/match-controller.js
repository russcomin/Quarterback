let logo,
	club_tile;

	logo = document.getElementsByClassName('logo')[0];
	logo.addEventListener('click', goHome);

	club_tile = document.getElementsByClassName('main-club')[0];
	club_tile.addEventListener('click', goHome);

	// SHOW RANK / HOVER

	let rank_menu = document.getElementsByClassName('rank-menu')[0];

	function showRank() {
		rank_menu.style.display = "block";
	}

	function closeRank() {
		rank_menu.style.display = "none";
	}

	// BUTTON HOVER

	let play = document.getElementById('play-cta');

	function ctaHover() {
		play.style.transition = ".2s";
		play.src = "./public/images/cta-hover.png";
	}
	function ctaDefault () {
		play.src = "./public/images/cta.png";
	}	

	// SHOW TOOLTIP / HOVER

	let tooltip = document.getElementsByClassName('tooltip-menu')[0];

	function tooltipMenu() { tooltip.style.display = "block"; }
	function tooltipClose() { tooltip.style.display = "none"; }

	function lb_page() {
		document.location = "leaderboard-v2.html";
	}