
//Email Validation

document.addEventListener('DOMContentLoaded', function() {
    // define form
    const form = document.getElementById("emailForm");

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const emailError = document.getElementById('error');

       if(validateEmail(email)) {
          // if email is correct grant submission
          emailError.textContent ="";
          this.submit();
       } else{
          // if not valid display this message
          emailError.textContent = "Please enter a valid email address.";
       }

    });

});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
