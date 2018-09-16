// Get honor-box
let honorBox;
honorBox = document.getElementById('honor-box');

// Function for hover 
function showHonor () {
	honorBox.style.transition = ".3s";
	honorBox.style.marginLeft = "335px";
}

function closeHonor () {
	honorBox.style.transition = ".3s";
	honorBox.style.marginLeft = "263px";
}