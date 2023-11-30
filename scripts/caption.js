const caption = document.querySelector(".caption");
var about_img = document.querySelectorAll('.image')

var word = ["Software engineering", "Systems programming", "Robotics"];
const typeDelay = 100;
const eraseDelay = 50;
const next = 1000;
var i = 0;
var charI = 0;
const img_len = about_img.length;
var img_ind = 0

function changeImg() {
    about_img[img_ind].classList.remove("visible");
    img_ind += 1;
    if(img_ind == img_len)
        img_ind = 0;
    about_img[img_ind].classList.add("visible");
}

function captionType() {
    if (charI < word[i].length) {
      caption.textContent += word[i].charAt(charI);
      charI++;
      setTimeout(captionType, typeDelay);
    } 
    else {
        setTimeout(eraseType, next);
    }
  }

function eraseType() {
	if (charI > 0) {
        caption.textContent = word[i].substring(0, charI - 1);
        charI--;
        setTimeout(eraseType, eraseDelay);
    } 
    else {
        i++;
        if(i >= word.length) i=0; {
            changeImg();
            setTimeout(captionType, typeDelay + 100);
        }
    }
}

document.addEventListener("DOMContentLoaded", function() { 
    if(word.length) setTimeout(captionType, next + 500);
  });
