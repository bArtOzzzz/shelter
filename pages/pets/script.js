menu.onclick = function myFunctional(){
	var x = document.getElementsByTagName('references');
	
	if (x.className === "header-references") {
		x.className += " responsive";
	} else {
		x.className = "header-references";
	}
}

let clicks = 1;

function forwardClick() {
  clicks++;
  document.getElementById("page-number").innerHTML = clicks;
};
function forwardAll() {
  clicks += 5;
  document.getElementById("page-number").innerHTML = clicks;
}
function backAll() {
  let buttons = document.querySelector('.back-all');
  if (clicks < 5) {
    buttons.setAttribute('aria-disabled', true);
  } else if (clicks > 5) {
    clicks -= 5;
    document.getElementById("page-number").innerHTML = clicks;
  }else if (clicks == 5) {
    clicks -= 4;
    buttons.setAttribute('aria-disabled', false);
    document.getElementById("page-number").innerHTML = clicks;
  }
}
function back() {
  let buttons = document.querySelector('.back');
  if (clicks <= 1) {
    buttons.setAttribute('aria-disabled', true);
  }else if (clicks > 1) {
    clicks--;
    document.getElementById("page-number").innerHTML = clicks;
  }
}