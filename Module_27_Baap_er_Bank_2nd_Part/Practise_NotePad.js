
// Bold Text
const boldElement = document.getElementById('Bold').addEventListener('click', function(){
    // get text Area
    const textAreaField = document.getElementById('textArea');
    // make it bold
    textAreaField.style.fontWeight = 'bold';
    textAreaField.classList.toggle = 'active'
})

// Italic Text
const italicElement = document.getElementById('Italic').addEventListener('click', function(){
    // get text Area
    const textAreaField = document.getElementById('textArea');
    // make it italic
    textAreaField.style.fontStyle = 'italic';
})

// UnderLine Text
const underLineElement = document.getElementById('Underline').addEventListener('click', function(){
    // get text Area
    const textAreaField = document.getElementById('textArea');
    textAreaField.style.textDecoration = 'underline';
})

// Text align left
const TextAlignLeft = document.getElementById('Left').addEventListener('click', function(){
    // get text Area
    const textAreaField = document.getElementById('textArea');
    textAreaField.style.textAlign = 'left';
})


// Text align center
const TextAlignCenter = document.getElementById('Center').addEventListener('click', function(){
    // get text Area
    const textAreaField = document.getElementById('textArea');
    textAreaField.style.textAlign = 'center';
})

// Text align Right
const TextAlignRight = document.getElementById('Right').addEventListener('click', function(){
    // get text Area
    const textAreaField = document.getElementById('textArea');
    textAreaField.style.textAlign = 'right';
})

// Text align justify
const TextAlignJustify = document.getElementById('Justify').addEventListener('click', function(){
    // get text Area
    const textAreaField = document.getElementById('textArea');
    textAreaField.style.textAlign = 'justify';
})


// Size will do after
// const TextAlignJustify = document.getElementById('Justify').addEventListener('click', function(){
//     // get text Area
//     const textAreaField = document.getElementById('textArea');
//     textAreaField.style.textAlign = 'justify';
// })


// Change Case 
// Text align justify
const ChangeCase = document.getElementById('caseChange').addEventListener('click', function(){
    // get text Area
    const textAreaField = document.getElementById('textArea');
    textAreaField.style.textTransform = 'uppercase';
})

// Color Change
const ChangeColor = document.getElementById('colorChange').addEventListener('click', function(){
    // get text Area
    const textAreaField = document.getElementById('textArea');
    textAreaField.style.color = `${col}`;
})