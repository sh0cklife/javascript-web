const myButton = document.getElementById("myButton");
const myImage = document.getElementById("myImage");

myButton.addEventListener("click", event => {

// if(myImage.style.visibility === "hidden"){
//     myImage.style.visibility = "visible";
//     myButton.textContent = "Hide";
// }
// else{
//     myImage.style.visibility = "hidden";
//     myButton.textContent = "Show";
// }

    if(myImage.style.visibility === "visible"){
        myImage.style.visibility = "hidden";
        myButton.textContent = "Show";
    }
    else{
        myImage.style.visibility = "visible";
        myButton.textContent = "Hide";
    }
});