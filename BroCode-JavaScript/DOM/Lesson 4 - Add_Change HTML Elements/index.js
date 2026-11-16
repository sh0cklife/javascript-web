//STEP 1 - Create the element

// const newH1 = document.createElement("h1");

// //STEP 2 - Add attributes/properties

// newH1.textContent = "I like pizza!";
// newH1.id = "myH1";
// newH1.style.color = "tomato";
// newH1.style.textAlign = "center";

// // STEP 3 - APPEND Element to DOM

// // document.body.append(newH1); - last child

// // document.body.prepend(newH1);

// document.getElementById("box1").prepend(newH1);
// // document.getElementById("box2").prepend(newH1);

// // const box2 = document.getElementById("box3");
// // document.body.insertBefore(newH1, box3);

// // const boxes = document.querySelectorAll(".box");
// // document.body.insertBefore(newH1, boxes[2]);

// document.getElementById("box1").removeChild(newH1);


const newListItem = document.createElement("li");

newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "brown";

// document.getElementById("fruits").prepend(newListItem);

// const orange = document.getElementById("banana");
// document.getElementById("fruits").insertBefore(newListItem, banana);

const listItems = document.querySelectorAll("#fruits li")
document.getElementById("fruits").insertBefore(newListItem, listItems[1])

// document.getElementById("fruits").removeChild(newListItem);