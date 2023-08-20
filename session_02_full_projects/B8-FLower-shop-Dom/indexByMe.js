let total = 0;
function handleCLikBtn(target){
    const selectedItemsContainer = document.getElementById('selected-items');
    const itemValue = target.parentNode.childNodes[1].innerText;
    const li = document.createElement('li');
    li.innerText = itemValue;
    
    selectedItemsContainer.appendChild(li)


    // getting price
    const price = target.parentNode.childNodes[5].innerText.split(' ')[1];
    total = parseFloat(total) + parseFloat(price);
    document.getElementById('total').innerText = total
}