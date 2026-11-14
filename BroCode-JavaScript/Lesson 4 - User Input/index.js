// let username;

// username = window.prompt("Whats your username?")

// console.log(username);

let username;
let password;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myUsername").value;
    password = document.getElementById("myPassword").value;
    
    if(username !== '' && password !== ''){
        document.getElementById("myH1").textContent = `Hello ${username}.`
    }
    else{
        document.getElementById("myH1").textContent = `Please type your username and password.`;
    }

    console.log(username);
    console.log(password);
    console.log(`User '${username}' with password '${password}' has logged in.`)
}