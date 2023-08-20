document.getElementById('deposit-btn').addEventListener('click', function(){
    // step-1: get the deposit input field value
    const depositField = document.getElementById('deposit-field');
    const depositAmountString = depositField.value;
    const newDepositAmount = parseFloat(depositAmountString);
    
    
    // Step-2: get the Deposit InnerText and Update
    const depositTotalField = document.getElementById('deposit-Total');
    const PreviousDepositTotalString = depositTotalField.innerText;
    const PreviousDepositTotal = parseFloat(PreviousDepositTotalString);

    // Step-3: Total of Previous and current Deposit
    const currentDepositTotal = newDepositAmount + PreviousDepositTotal;

    // Step-4: Update the amount to Deposit
    depositTotalField.innerText = currentDepositTotal;


    // Step-5: get Balance Total
    // const balanceField = document.getElementById('balance-total').innerHTML;
    // console.log(balanceField);
    // const BalanceTotalString = balanceField.innerText;
    
    // const BalanceTotal = parseFloat(BalanceTotalString);

    // // // Step-6: Total of Total Deposit and existing balance
    // const currentBalanceTotal = currentDepositTotal + BalanceTotal
    // console.log(currentBalanceTotal);
    // // // step-7: Update Balance
    // balanceField.innerText = currentBalanceTotal;

    // // Step-7: clear Deposit Input Field;
    depositField.value = '';



});