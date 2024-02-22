document.addEventListener('DOMContentLoaded', function() {
    // define form
    const form = document.getElementById("dynamicForm");

    form.addEventListener('submit', function(e) {
        e.preventDefault();
      

       if(validateForm()) {
          // call the function
              this.submit();
       } 
    });
    
    document.getElementById('numFields').addEventListener('change', function() {
           generateInputFields(this.value);
        });

});


function generateInputFields(numfields) {
    const inputContainer = document.getElementById('inputContainer');
    inputContainer.innerHTML='';
      
    for(i = 1; i <= numfields; i++) {
        const inputField = document.createElement('input');
        inputField.type = 'date';
        inputField.type = 'text';
        inputField.name = 'field' + i;
        inputContainer.appendChild(inputField);
    }

};

function validateForm(){
    const inputFields = document.querySelectorAll('#inputContainer input');

    for (const field of inputFields) {
        if (field.value.length === 0) {
            alert("Please fill in all fields");
            return false
        } else {

        }
    }
    return true


}
