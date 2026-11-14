const welcome = document.getElementById("welcome-msg");
let username = 'sh0cklife';

welcome.textContent += username === "" ? `Guest` : username;