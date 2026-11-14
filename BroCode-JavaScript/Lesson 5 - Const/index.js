const PI = 3.14159;
let radius;
let circ;


// radius = window.prompt('Enter the radius of a circle');

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circ = 2 * PI * radius;
    document.getElementById("myH3").textContent = circ + 'CM';
    document.getElementById("myH3").style.color = "red";
}