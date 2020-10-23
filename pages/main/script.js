menu.onclick = function myFunctional(){
	var x = document.getElementsByTagName('navigation');
	
	if (x.className === "navigation-panel") {
		x.className += " responsive";
	} else {
		x.className = "navigation-panel";
	}
}