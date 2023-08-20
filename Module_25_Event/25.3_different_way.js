
// Option - 2 : directly set onclick into html tag
// <button onclick="document.body.style.backgroundColor = 'yellow'">Make yellow</button>



// !important Mostly used
// Option - 2 : call a function using onclick into html tag
// <button onclick="makeRed()">Make Red</button>
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

// Option - 4 addEventListener calls a function
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink(){
    document.body.style.backgroundColor = 'pink';
}

// Option - 5 : function inside of addEventListener  
const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click', function(){
    document.body.style.backgroundColor = 'green';
})
// Option - 6 :    (Use Sometimes)
document.getElementById('make-goldenRod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod'
})