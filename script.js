function getComputerChoice() {
    const num = Math.floor((Math.random()*3) + 1);
    let computerChoice = null;
    switch (num) {
        case 1: 
              computerChoice = "rock";
            break;
        case 2:
               computerChoice = "paper";
            break;
        case 3:
                computerChoice = "scissors";
    }
    console.log(computerChoice);
}

getComputerChoice();