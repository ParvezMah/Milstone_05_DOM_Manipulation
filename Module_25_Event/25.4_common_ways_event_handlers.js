//  Option - 1 : add event by onclick 
function handleOnclick(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'handled by function attached on onclick attribute';
 }
//  Option - 2 : add event by addEventListener
document.getElementById('event-listener').addEventListener('click', function(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Text Changed by Event Listener';
})