const max = prompt("how much the number to guessing range");
const number = Math.floor(Math.random()*max)+1;
let guessing = prompt("guess the number");

while( true ){
    if(guessing == "quit"){
        console.log("Quit the game");
        break;
    }
    
    if (guessing == number ){
        console.log("your guess is right! congrats! Rondon number was:", number);
        break;
    } else if (guessing < number){
        guessing = prompt("Your guess was wrong and too Small. please try again");
    } else {
        guessing = prompt("Your guess was wrong and to Large. please try again");
    }
}