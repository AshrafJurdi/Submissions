var buttonShow = document.getElementById('show');
var buttonHide = document.getElementById('hide');

buttonShow.onclick = buttonClick.bind(this, true);
buttonHide.onclick = buttonClick.bind(this, false);

var text = document.getElementById('texte');

function buttonClick(visible){
    if (visible)
        text.style.display= "block";
    else
        text.style.display= "none";
}