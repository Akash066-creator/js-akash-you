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

