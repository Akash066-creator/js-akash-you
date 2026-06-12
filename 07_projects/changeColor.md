# Project related to DOM
## Project Link
 [click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)
## solution code
Project 1
```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function (botton) {
  botton.addEventListener('click', function (e) {
    switch (e.target.id) {
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      default:
        break;
    }
  });
});

```

## project 2 Solution

BMI calculator

```javascript
const form = document.querySelector('form');
// const height = parseInt(document.querySelector('#height').value);
//this access will give you empty valye
//we need value after submitt
form.addEventListener('submit', function(event){
    
    event.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value); 
    const result = document.querySelector('#results');
    const des = document.querySelector('#description');

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `please  give avalid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `please  give avalid height ${weight}`;
    }
    else{
        const bmi = (weight / ((height*height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
        if(bmi < 18.6){
            description.innerHTML = `<span>Under weight = Less than 18.6</span>`;
        }
        else if(bmi < 24.9){
            description.innerHTML = `<span>Normal range = 18.6 and 24.9</span>`;
        }
        else{
            description.innerHTML = `<span>Overweight = Greater than 24.9</span>`;
        }
    }
    
})

```


## Project 3 solution
Digital Clock
```javascript
const clock = document.getElementById('clock');

// let date = new Date();
// console.log(date.toLocaleDateString());
//1000 milisecond = 1 sec
const show = document.querySelector('#show');
show.addEventListener('click',function(e){
    setInterval(function(){
    let date = new Date();
    clock.innerHTML = `${date.toLocaleTimeString()}`;
    },1000);
});

```




## Project solution 4
Guess a Number game
```javascript
let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#sub');
const userInput = document.querySelector('#guessFeild');

const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');

const loOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');


let prevGuess = [];
let numGuess = 1;

let palyGame = true;

if(palyGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        // console.log(guess);
        validateGuess(guess);
        
    })
}

function validateGuess(guess){
    //
    if(isNaN(guess)){
        alert("please enter a valid number");
    }
    else if(guess < 1){
        alert("please enter a number more than 1");
    }
    else if(guess > 100){
        alert("please enter a number less than 100");
    }
    else{
        prevGuess.push(guess);
        displayGuess(guess);
        if(numGuess === 11){  
            displayMessage(`<p style="background-color:red">game over. Random number was ${randomNumber}<p>`);
            endGame();
        }
        else{
            checkGuess(guess);
        }
    }
}

function displayGuess(guess){
    userInput.value = "";
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;
}


function displayMessage(message){
    loOrHi.innerHTML = `<p style="background-color:green"><h3>${message}</h3></p>`;
}


function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage("your number is right");
        endGame();
    }
    else if(guess < randomNumber){
        displayMessage("your number is tooo low");
    }
    else
        displayMessage("your number is tooo high");
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    p.style.backgroundColor="#222"
    startOver.appendChild(p);
    palyGame = false;
    newGame();
}
function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()*100+1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        palyGame = true;
    })
}
```

## Project 5
# press Key and see
```javascript
const insert = document.getElementById('insert');
window.addEventListener('keydown',(e) => {
    insert.innerHTML = `
    <div class="color">
        <table id="table" border="1px" align="center">
                <tr>
                    <th>Key</th>
                    <th>keyCode</th>
                    <th>code</th>
                </tr>
                <tr>
                    <td>${e.key===" "?"space":e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </table>
        </div>
        
    `
});
```
## Project 6
# start and stop background color change continuously
```javascript
const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}
let intervalId;
const startChaneColor = function(){
    const changeColor = function(){
             document.body.style.backgroundColor = randomColor(); 
    }
    if(!intervalId){
        intervalId = setInterval(changeColor,1000);
    }
    
};

const stoptChaneColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}
document.querySelector('#start').addEventListener('click',startChaneColor);
document.querySelector('#stop').addEventListener('click',stoptChaneColor);












// let intervalId;
// let i = 0;
// const color = ["green","blue","red"];
// const body = document.querySelector('body');
// document.querySelector('#start').addEventListener('click',function(e){
//     const changeColor = function () {
//         body.style.backgroundColor = color[i];
//         i = (i + 1) % color.length;
//     }
    
//     intervalId = setInterval(changeColor, 2000);
// });

// document.querySelector('#stop').addEventListener('click',function(e){
//     clearInterval(intervalId);
// })
````