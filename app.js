const p1Button = document.querySelector('#p1button');
const p2Button = document.querySelector('#p2button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');
const num = document.querySelector('#num');

let p1_score=0;
let p2_score=0;
let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener('click', function()
{
    if(!isGameOver)
    {
        p1_score +=1;
        p1Display.textContent = p1_score;
        if(p1_score === winningScore)
        {
            isGameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            p1Button.disabled =  true;
            p2Button.disabled = true;
        }
    }
})
p2Button.addEventListener('click', function()
{
    if(!isGameOver)
    {
        p2_score +=1;
        p2Display.textContent = p2_score;
        if(p2_score === winningScore)
        {
            isGameOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            p1Button.disabled =  true;
            p2Button.disabled = true;
        }
    }
})

resetButton.addEventListener('click', reset)

num.addEventListener('change', function()
{
    winningScore = parseInt(this.value);
    reset();
})

function reset()
{
    isGameOver = false;
    p1_score=0;
    p2_score=0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success','has-text-danger');
    p2Display.classList.remove('has-text-success','has-text-danger');
    p1Button.disabled =  false;
    p2Button.disabled = false;
}