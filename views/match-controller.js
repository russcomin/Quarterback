let logo,
	club_tile;

	logo = document.getElementsByClassName('logo')[0];
	logo.addEventListener('click', goHome);

	club_tile = document.getElementsByClassName('main-club')[0];
	club_tile.addEventListener('click', goHome);

	let rank_menu = document.getElementsByClassName('rank-menu')[0];

	function showRank() {
		rank_menu.style.display = "block";
	}

	function closeRank() {
		rank_menu.style.display = "none";
	}