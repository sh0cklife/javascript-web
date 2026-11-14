const myText = document.getElementById("myText");
const submit = document.getElementById("submitBtn");
const resultElement = document.getElementById("result");

let age = 0;

submit.onclick = function(){
    
    age = myText.value;
    age = Number(age);

    if(age >= 100){
        resultElement.textContent = `You are too old to enter this site.`
    }
    else if(age == 0){
        resultElement.textContent = `You cant enter, you were just born.`
    }
    else if(age >= 18){
        resultElement.textContent = `Old enough to enter this site.`
    }
    else if(age < 0){
        resultElement.textContent = `Your age can't be below 0.`
    }
    else{
        resultElement.textContent = `You must be 18+ to enter this site.`
    }
}


// if (age >= 16){
//     console.log("You are old enough to drive.")

//     if(hasLicense){
//         console.log("You have your license.")
//     }
//     else{
//         console.log("You do NOT have your license yet.")
//     }
// }
// else{
//     console.log("You must be 16+ to have a license.")
// }

