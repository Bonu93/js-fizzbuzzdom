
const container = document.querySelector('.container');

for (let i = 1; i <= 100; i++) {
    let text;
    let className;

    if ((i % 3 == 0) && (i % 5 == 0)) {
        text = 'fizzbuzz';
        className = 'fizzbuzz';
    }
    else if (i % 3 == 0) {
        text = 'fizz';
        className = 'fizz';
    }
    else if (i % 5 == 0) {
        text = 'buzz';
        className = 'buzz';
    }
    else {
        text = i;
        className = '';
    }
    
    container.innerHTML += `<div class="box ${className}">${text}</div>`;
}


