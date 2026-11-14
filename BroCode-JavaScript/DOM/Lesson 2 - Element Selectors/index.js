//getElementById()

const myHeading = document.getElementById("my-heading")

myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading);

//getElementByClassName()

const fruits = document.getElementsByClassName("fruits")
console.log(fruits)

fruits[0].style.backgroundColor = "green";
fruits[1].style.backgroundColor = "orange";
fruits[2].style.backgroundColor = "yellow";

for(let fruit of fruits){
    fruit.style.backgroundColor = "red";
}

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "green";
});

//getElementbyTagName()

const h4Elements = document.getElementsByTagName("h4");
// console.log(h4Elements);

const liElements = document.getElementsByTagName("li");

h4Elements[0].style.backgroundColor = 'yellow';
h4Elements[1].style.backgroundColor = 'orange';

for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "green";
}

for(let liElement of liElements){
    liElement.style.backgroundColor = 'teal';
}

Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.fontSize = '2em';
})

Array.from(liElements).forEach(liElement => {
    liElement.style.fontSize = '1.5em';
    liElement.style.backgroundColor = 'purple';
})

//querySelector

const element = document.querySelector(".fruits");
element.style.backgroundColor = 'red';

//querySelectorAll() - NODELIST / STATIC

const foods = document.querySelectorAll("li");
// foods[0].style.backgroundColor = 'green';

foods.forEach(food => {
    food.style.backgroundColor = "Orange";
})

