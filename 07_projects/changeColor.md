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
