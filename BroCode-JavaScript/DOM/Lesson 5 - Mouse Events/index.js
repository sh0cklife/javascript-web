const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

// function changeColor(event){
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH! 😡"
// }

myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! 😡"
});

myBox.addEventListener("mouseover", event =>{
    event.target.style.backgroundColor = "banana";
    event.target.textContent = "Don't do it... 😓"
})

myBox.addEventListener("mouseout", event =>{
    event.target.style.backgroundColor = "teal";
    event.target.textContent = "Click Me 😁"
})

myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH! 😡"
})