document.getElementById('submit-btn').addEventListener('click', function(){
    // get email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail);

    // get Password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    console.log(userPassword);

    if(userEmail === 'parvezmahmudaa100@gmail.com' && userPassword === 'pm100'){
        window.location.href = 'test2.html';
    }
    else{
        alert('Invalid User');
    }

})