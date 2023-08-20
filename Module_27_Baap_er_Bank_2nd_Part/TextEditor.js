const textarea = document.getElementById('textArea');

function f1(e){
    let value = e.value;
    textarea.style.fontSize = value + 'px';
}