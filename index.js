let secretNumber;
let userName ;

//greets the new user
function greeter (name) {
    console.log('hello ' + name);
}
//create a random integer number between 0-100 
function createSecretNumber() {
    secretNumber = Math.floor(Math.random() * 100 + 1);
}

// greeter(UserName);
createSecretNumber()


startBtn.addEventListener('click', createSecretNumber);