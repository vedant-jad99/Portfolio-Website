const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

var words = ["< Welcome >", "< to >", "< my > ", "< Website >"];
const typingDelay = 100;
const erasingDelay = 50;
const nextDelay = 500;
var index = 0;
var charIndex = 0;
var scroll_toggle = true;

function scroller() {
	var ele_list = document.getElementsByClassName("card");
	var _imgele = document.getElementById("arrow");
	if (scroll_toggle) {
		for (let i = 0; i < ele_list.length; i++) {
			ele_list[i].classList.remove("hide");
		}

		_imgele.src = "images/up-arrow.png"
		scroll_toggle = false;
	} else {
		for (let i = 2; i < ele_list.length; i++) {
			ele_list[i].classList.add("hide");
		}
		_imgele.src = "images/arrow.png";
		scroll_toggle = true;
	}
}

function type() {
  if (charIndex < words[index].length) {
    if(!cursor.classList.contains("typing")) cursor.classList.add("typing");
    typedText.textContent += words[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursor.classList.remove("typing");
  	setTimeout(erase, nextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursor.classList.contains("typing")) cursor.classList.add("typing");
    typedText.textContent = words[index].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursor.classList.remove("typing");
    index++;
    if(index>=words.length) index=0;
    setTimeout(type, typingDelay + 200);
  }
}

function Toggle() {
  var ele = document.getElementById("menu");
  ele.classList.toggle("menu-active");
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(words.length) setTimeout(type, nextDelay + 250);
});
