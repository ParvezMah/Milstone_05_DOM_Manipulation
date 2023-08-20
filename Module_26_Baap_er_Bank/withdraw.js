    // Step - 8: set withdraw
    /* 
    1. add event handler with the withdraw button
    2. get the withdraw amount from the withdraw input field
    3. also make sure to convert the input into a number by using parseFlot
    */
    
    document.getElementById('withdraw-btn').addEventListener('click', function(){
        const withdrawField = document.getElementById('withdraw-field');
        const newWithdrawAmountString = withdrawField.value;
        const newWithdrawAmount = parseFloat(newWithdrawAmountString);

        // Step - 7: clear the input field
        withdrawField.value = '';

        if(isNaN(newWithdrawAmount)){
            alert('Please Provide a number');
            return;
        }
        

        // step 3:
        const WithdrawTotalElement = document.getElementById('withdraw-total');
        const previousWithdrawTotalString = WithdrawTotalElement.innerText;
        const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
        console.log('2nd ', typeof previousWithdrawTotal);





        // Step - 5:
        const balanceTotalElement = document.getElementById('balance-total');
        const previousBalanceTotalString = balanceTotalElement.innerText;
        const previousBalanceTotal = parseFloat(previousBalanceTotalString);
        console.log(previousBalanceTotal);



        // step - 8 : validation
        if(newWithdrawAmount > previousBalanceTotal){
            alert('Baap er Bank e eto taka nai');
            return;
        }

        // Step - 4: Calculate total withdraw amount
        const currentWithdrawTotal =  previousWithdrawTotal + newWithdrawAmount;
        console.log('current ', currentWithdrawTotal);
        WithdrawTotalElement.innerText = currentWithdrawTotal;
        // Step - 6:
        const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
        balanceTotalElement.innerText = newBalanceTotal;



    })