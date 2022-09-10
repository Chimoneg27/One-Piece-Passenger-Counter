// COUNT APP

let countEl = document.getElementById("count-el");
let saveEL = document.getElementById("save-el");

let count = 0;

function increment(){
    count += 1;
    countEl.textContent = count;
}

function decrease(){
    if (count > 0){
        return countEl.textContent = count -= 1;
    }
}

function save(){
    let saved = count + " - ";
    saveEL.textContent +=  saved;
    countEl.textContent = 0;
    count = 0;
}

save();

// function reset(){
//     if(count > 0){
//         return countEl.textContent = count - count;
//     }
// }

// reset();


// let welcomeEl = document.getElementById("welcome-el");
// let Name = "Garvin Shu Chimone";
// let greeting = "Welcome back ";

// welcomeEl.innerText = greeting + Name;
// welcomeEl.innerText += " 👋";

// CHALLANGES
let sub = 4;

let username = "per"

let message = "You have tree new notifications";

let messageToUser = message + ", " + username + "!";
console.log(messageToUser);



greeting + Name;