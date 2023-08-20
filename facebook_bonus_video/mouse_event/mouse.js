const container = document.getElementById('container');

const ball = document.getElementById('ball');

// container.addEventListener('mousedown', function(e){
//     console.log(e);
// })
// container.addEventListener('mouseup', function(e){
//     console.log(e);
// })
// container.addEventListener('mousemove', function(e){
//     console.log(e);
// })

let initialTop, initialLeft;


function handleMove(e){
    const left = e.clientX - initialLeft;
    console.log('left', left);
    const top = e.clientY - initialTop;
    console.log('top', top);
    ball.style.left = `${left}px`;
    ball.style.top = `${top}px`;
}

ball.addEventListener('mousedown', function(e){
    console.log('mousedown is clicked');
    if( !initialLeft && !initialTop){
        console.log('if is working');
        initialLeft = e.clientX;
        initialTop = e.clientY;
    }
    container.addEventListener('mousemove', handleMove);
    console.log('mousemove is clicked');
});


ball.addEventListener('mouseup', function(){
    container.removeEventListener('mousemove', handleMove)
});
