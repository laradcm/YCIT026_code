

setTimeout(main, 3000);

function main(){

const [gameStatus, guess] = gameInit();

alert("Welcome to the guessing game, think of a number between 1-99");
alert("Rules: type l for lower, h for higher, t for target and press cancel to exit");

gameLoop(guess, gameStatus);
gameResult(guess, gameStatus);
    
}

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


    let userInput = "";
    
    while (true){

        console.log(guess.num);
        userInput = prompt(`        I guess ${guess.num}! 
        Am I right? or should I aim higher or maybe lower?`);

        switch (userInput) {
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

            case null:
                alert("Exiting the Game...");
                gameStatus.exit = true;
                break;   
        
            default:
                alert("Bad input, review rules and try again");
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
        alert("The number you thought was " + guess.num + ", I got it after " + guess.tries + " tries!");
    }

    if (gameStatus.cheated) {
        alert("You cheated! That's not fair! Game Over.");
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
