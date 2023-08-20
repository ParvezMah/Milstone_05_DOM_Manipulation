
// Option - 2 : directly set onclick into html tag


// Option - 2 : call a function using onclick into html tag
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// Option - 3.1 : Make a function and call it by a variable
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

// Option - 3.2 : Make a function into a variable
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function(){
    document.body.style.backgroundColor = 'purple'
}