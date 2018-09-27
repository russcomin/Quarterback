let logo,
	club_tile;

	logo = document.getElementsByClassName('logo')[0];
	logo.addEventListener('click', goHome);

	club_tile = document.getElementsByClassName('main-club')[0];
	club_tile.addEventListener('click', goHome);

	function goHome() {
		document.location = "index.html";
	}

