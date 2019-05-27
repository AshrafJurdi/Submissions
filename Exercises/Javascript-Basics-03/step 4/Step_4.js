
var bor= document.getElementsByTagName('input');
var but= document.querySelector('button');

but.onclick= function xxx(){

var pass = document.getElementById('password').value;
var conf = document.getElementById('confirmation').value;

if (pass != conf){
    document.getElementById('password').style.border = "3px solid red";
    document.getElementById('confirmation').style.border = "3px solid red";
}
else {
    document.getElementById('password').style.border = "";
    document.getElementById('confirmation').style.border = "";
}

}