// This is a named welcomeMessage
function welcomeMessage(fullName) {
   // a call for an alert
    return function() {
        // the alert displays a welcome <fullName>
       alert(`Welcome ${fullName}`)
    }

}

//creating 3 variables
let guillaume = welcomeMessage('guillaume')
//creating 3 variables
let alex = welcomeMessage('alex')
//creating 3 variables
let fred = welcomeMessage('fred')