//firstElementChild

// const fruits = document.getElementById("fruits")
// const firstChild = fruits.firstElementChild;

// const veggies = document.getElementById("veggies")
// const firstChildV = veggies.firstElementChild;

// firstChild.style.backgroundColor = "pink";
// firstChildV.style.backgroundColor = "green";


const ulElements = document.querySelectorAll("ul");


ulElements.forEach(element => {
    const firstChild = element.firstElementChild;
    firstChild.style.backgroundColor = "Yellow";

    //nextElementSibling
    const nextChild = firstChild.nextElementSibling;
    nextChild.style.backgroundColor = "Magenta";
})

//lastElementChild

// const lastElementChild = document.getElementById("fruits");
// const lastChild = lastElementChild.lastElementChild;
// lastChild.style.backgroundColor = "Pink";

const lastChildren = document.querySelectorAll("ul");

lastChildren.forEach(lastUlElement =>{
    const lastChild = lastUlElement.lastElementChild;
    lastChild.style.backgroundColor = 'Pink';


    //previousElementSibling
    //overwrites lines 21-22
    const middleChild = lastChild.previousElementSibling;
    middleChild.style.backgroundColor = "Blue";
})

