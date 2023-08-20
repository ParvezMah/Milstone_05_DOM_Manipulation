// Step -1 : add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
        // step-2 : get the email address inside the email field
        // always remember to use. value to get text from an input field
        const emailField = document.getElementById('user-email');
        const email = emailField.value;
        console.log(email);
        
        // password
        // step-3 : get password
        // step-4 : set id on html element
        const passwordField = document.getElementById('user-password');
        const password = passwordField.value;
        console.log(password);

        // DANGER : DO NOT VERIFY email & password on the client side
        // Step 4 : verify email and password
        if(email === 'sontan@baap.com' && password === 'secret'){
            window.location.href = 'bank.html';
        }
        else{
            console.log("Invalid User");
        }

})