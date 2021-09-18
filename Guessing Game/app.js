let maximum = parseInt(prompt("Enter Your Maximum Number! "));

while (!maximum) {
    maximum = parseInt(prompt("Enter a Valid Number! "));

}
const targertNum = Math.floor(Math.random() * maximum) + 1;
let attempts = 1;

let guess = parseInt(prompt("Enter Your First Guess!"));
while (parseInt(guess) !== targertNum)
{
    if(guess === 'q') break;
    attempts++;
    if(guess > targertNum)
    {
        guess = (prompt("Too High! Enter a new guess:"));
    }
    else
    {
        guess = (prompt("Too Low! Enter a new guess:"));
        
    }
}

if(guess === 'q') {
    console.log("OK YOU ARE QUITING! BYE......");
}
else {
    console.log("CONGRACTS YOU WIN!")
    console.log(`You Got It! It took you ${attempts} guesses`);
}
