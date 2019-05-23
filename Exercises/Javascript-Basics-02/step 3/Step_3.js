var a= document.createElement("div");
var b= document.querySelector("#name");

b.onkeyup= function() {
    a.innerHTML= b.value;
    document.body.appendChild(a);
}