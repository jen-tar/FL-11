let answer;
let pocket;
let userChoice;
let number = 8;
let number2 = 12;
let attempts = 3;
let firstPrize = {
    first: 100,
    second: 50,
    third: 25
}
let secondPrize = {
    first: 200,
    second: 100,
    third: 50
}
let firstGain;
let secondGain = 0;

answer = confirm('Do you want to play a game?');
if (!answer) {
    alert('You did not become a billionaire, but can.');
} else {
    pocket = Math.floor(Math.random() * number);
    for (let i = 0; i < attempts; i++) {

        userChoice = parseInt(prompt('enter a number of pocket on which the ball could land (from 0 to 8)'), 10);
        if (pocket === userChoice) {
            switch (i) {
                case 0:
                    firstGain = firstPrize.first;
                    break;
                case 1:
                    firstGain = firstPrize.second;
                    break;
                default:
                    firstGain = firstPrize.third;
                    break;
            }
            break;
        } else {
            firstGain = 0;
        }
    }
    if (firstGain === 0) {
        alert('Thank you for your participation. Your prize is: ' + firstGain + '$');
        confirm('Do you want to play again ?');
    } else {
        console.log('game is continuing');
        alert('Congratulation, you won!Your prize is:' + firstGain + '$');
        answer = confirm('Do you want to continue?');
        if (!answer) {
            alert('Thank you for your participation. Your prize is: ' + firstGain + '$');
            confirm('Do you want to play again ?');
        } else {
            pocket = Math.floor(Math.random() * number2);

            for (let i = 0; i < attempts; i++) {
                userChoice = parseInt(prompt('Enter a number of pocket on which the ball could land' + 
                '(from 0 to 12)\nAttempts left:'+(attempts - i) + '\nTotal prize:' + (firstGain + secondGain) +
                    '\nPossible prize on current attempt:' + Object.values(secondPrize)[i]), 10);

                if (pocket === userChoice) {
                    switch (i) {
                        case 0:
                            secondGain = secondPrize.first;
                            break;
                        case 1:
                            secondGain = secondPrize.second;
                            break;
                        default:
                            secondGain = secondPrize.third;
                            break;
                    }
                    console.log(secondGain);
                    break;
                } else {
                    console.log('loser');
                    secondGain = 0;
                }
            }
            if (secondGain === 0) {
                alert('Thank you for your participation. Your prize is: ' + 0 + '$');
                confirm('Do you want to play again ?');
            } else {
                alert('Congratulation, you won!Your prize is:' + (firstGain + secondGain) + '$');
            }

        }
    }

}
