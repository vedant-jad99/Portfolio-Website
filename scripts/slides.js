var slidePosLang = 0, slidePosTool = 0;
const slidesLang = document.getElementsByClassName('column-lang');
const totalLang = slidesLang.length;
const slidesTool = document.getElementsByClassName('column-tool')
const totalTool = slidesTool.length;

function moveToNextLang () {
    slidesLang[slidePosLang].classList.remove('item-show');
    if(slidePosLang == totalLang - 1)
        slidePosLang = 0;
    else
        slidePosLang += 1;
    
    slidesLang[slidePosLang].classList.add('item-show');
}
function moveToNextTool () {
    slidesTool[slidePosTool].classList.remove('item-show');
    if(slidePosTool == totalTool - 1)
        slidePosTool = 0;
    else
        slidePosTool += 1;
    
    slidesTool[slidePosTool].classList.add('item-show');
}

function moveToPrevLang () {
    slidesLang[slidePosLang].classList.remove('item-show');
    if(slidePosLang == 0)
        slidePos = totalLang - 1;
    else
        slidePosLang -= 1;
    
    slidesLang[slidePosLang].classList.add('item-show');
}
function moveToPrevTool () {
    slidesTool[slidePosTool].classList.remove('item-show');
    if(slidePosTool == 0)
        slidePosTool = totalTool - 1;
    else
        slidePosTool -= 1;
    
    slidesTool[slidePosTool].classList.add('item-show');
}

document.addEventListener('DOMContentLoaded', function () {
    setInterval (moveToNextLang, 3000);
    setInterval (moveToNextTool, 3000);
});