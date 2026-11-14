const myCheckbox = document.getElementById("myCheckbox")
const visaBtn = document.getElementById("visaBtn")
const masterBtn = document.getElementById("masterBtn")
const paypalBtn = document.getElementById("paypalBtn")
const submitBtn = document.getElementById("submitBtn")

const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

submitBtn.onclick = function(){
    
    if(myCheckbox.checked){
        subResult.textContent = `You are subscribed!`;
    }
    else{
        subResult.textContent = `You are NOT subscribed!`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with VISA.`
    }
    else if(masterBtn.checked){
        paymentResult.textContent = `You are paying with Master Card.`
    }
    else if(paypalBtn.checked){
        paymentResult.textContent = `You are paying with PayPal.`
    }
    else{
        paymentResult.textContent = `Select a payment method.`
    }
}