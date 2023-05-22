

(()=>{

const [gameStatus, guess] = gameInit();

console.log("Welcome to the guessing game, think of a number between 1-99");
console.log("Rules: type l for lower, h for higher, t for target and e to exit");

setTimeout(() => {
    
}, 3000);

gameLoop(guess, gameStatus);
gameResult(guess, gameStatus);

})()


function gameInit(){

    const gameStatus = {
        victory: false,
        loss: false,
        cheated: false,
        exit: false,
    }
    
    const guess = {
        num:getRndInteger(1,99),
        max:99,
        min:1,
        tries:1
    }

    return [gameStatus, guess];
}

function gameLoop(guess, gameStatus){

    const prompt = require('prompt-sync')({sigin:true});

    let userInput = "";
    
    while (true){

        console.log(guess.num);
        userInput = prompt("is the number higher or lower?");

        switch (userInput.toLowerCase()) {
            case "l":
                guess.max = guess.num;
                guess.num = binarySearch(guess.min, guess.max);
                guess.tries++;
                break;

            case "h":
                guess.min = guess.num;
                guess.num = binarySearch(guess.min, guess.max);
                guess.tries++;
                break;

            case "t":
                gameStatus.victory = true;
                gameStatus.exit = true;
                break;

            case "e":
                console.log("Exiting the Game...");
                gameStatus.exit = true;
                break;   
        
            default:
                console.log("Bad input, review rules and try again");
                break;
        }

        if(gameStatus.exit){break;}

        if(guess.min == guess.max){

            gameStatus.cheated = true;
            break;
        }
    }
}

function gameResult(guess, gameStatus){
    if (gameStatus.victory) {
        console.log("The number you thought was " + guess.num + ", I got it after " + guess.tries + " tries!");
    }

    if (gameStatus.cheated) {
        console.log("you cheated! That's not fair! Game Over.");
    }

}

function getRndInteger(min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}

function binarySearch(start, end){

    console.log(start + " " + end);

    let mid = Math.ceil((end-start)/2) + start;

    if(start == end-1 && start == 1){
        mid = start;
    }
    
    return  (mid);
}
