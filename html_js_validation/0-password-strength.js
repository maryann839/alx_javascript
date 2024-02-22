//validate password

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('passwordForm');
   
   
    form.addEventListener('submit', function (event) {
        event.preventDefault();


        const password =document.getElementById('password').value;
        const passwordError = document.getElementById('error');

        if(validatePassword(password)) {
            // if textcontent is correct grant submission
            passwordError.textContent ="";
            this.submit();
        } else{
            // if not correct display this message
            passwordError.textContent ="Password is invalid" 
        }
    }); 

})
       

function validatePassword(password){
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%^*?&])[A-Za-z\d@$!%^*?&]{8,}$/;
    return passwordRegex.test(password);
};  