var text = document.getElementById('text');
var green = document.querySelector('.green');
var red = document.querySelector('.red');
var blue = document.querySelector('.blue');






green.onclick = function textColor(){
    text.style.color= 'green';
}
red.onclick = function textColor2(){
    text.style.color= 'red';
}
blue.onclick = function textColor3(){
    text.style.color= 'blue';
}
