document.addEventListener('DOMContentLoaded', function() {
    // define form
    const form = document.getElementById("submitForm");

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        handleFormSubmit();
       

    });

});

function handleFormSubmit() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


   if(validateForm(name, email, password)) {
      // if email is correct grant submission
     alert('Form submitted successfully!');
   }
}

function validateForm(name, email, password) {
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
        alert('Please fill in all required fields.');
        return false;
    }
    return true;
};

