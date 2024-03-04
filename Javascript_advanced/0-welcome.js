// create a function named welcome
function welcome(firstName, lastName) {
  let fullName = `${firstName} ${lastName} `;

  // displayFullName function
  function displayFullName() {
    alert(`Welcome ${fullName}!`);
  }
  // call the displayFullName() function
  displayFullName();
}

