// add eventListener to the deposit button
document.getElementById('deposit-btn').addEventListener('click', function(){
    // step -2 : get the value from deposit input field
    // for input field we use value intead of innerText
    
    const depositField = document.getElementById('deposit-field');
    const newDepositFieldAmountString = depositField.value;
    // console.log(newDepositFieldAmountString);
    const newDepositFieldAmount = parseFloat(newDepositFieldAmountString);



    // step -3: get the current deposit total
    // for non-input( element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // add numbers to the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositFieldAmount;

    // when we changed innerText then we will select innerText not variable
    depositTotalElement.innerText = currentDepositTotal;

    // step - 5: get balance 
    const balanceTotalElement = document.getElementById('balance-total');
    previousBalanceTotalElementString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalElementString);

    // step - 6 : calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositFieldAmount;
    // set the total balance
    balanceTotalElement.innerText = currentBalanceTotal;
    // Step - 7: clear the deposit field
    depositField.value = '';
})