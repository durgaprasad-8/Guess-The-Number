'use strict';




let secretNumber = Math.trunc(Math.random() * 20) + 1;


let score = 20;

let highScore = 0;

// dry


const dislayMessage = function(message) 
{
    document.querySelector('.message').textContent = message;
}



// implementing the check button features

document.querySelector('.check').addEventListener('click', function() {

    const guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess);

    // no number

    if(!guess)
    {
        // document.querySelector('.message').textContent = '⛔ No Number';
        dislayMessage('⛔ No Number!');
    }

    // player wins

    else if(guess === secretNumber)
    {
        // document.querySelector('.message').textContent = "✔ Correct Number";
        dislayMessage('✔ Correct Number');
        
        // shows the secret when we guess the secretNumber
        document.querySelector('.number').textContent = secretNumber;

        // changes the background color to green when player wins
        document.querySelector('body').style.backgroundColor = '#60b347';

        // changes the width of the secretNumber div
        document.querySelector('.number').style.width = '30rem';

        if(score > highScore)
        {
            highScore = score;

            document.querySelector('.highscore').textContent = highScore;
        }
    }

    // when guess went wrong

    else if(guess !== secretNumber)
    {
        if(score > 1)
        {
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';

            dislayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        }

        else
        {
            // document.querySelector('.message').textContent = "⏳ You lost!";
            dislayMessage('⏳ You lost!');

            document.querySelector('.score').textContent = 0;
        }

    }
});


// implementing the again features

document.querySelector('.again').addEventListener('click', function() {

    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = 'start guessing...'
    dislayMessage('Start Guessing....');

    document.querySelector('.score').textContent = score;

    document.querySelector('.number').textContent = '?';

    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';


});