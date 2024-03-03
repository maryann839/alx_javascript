// javascript advance. creating a closurescope chain

// creat a varaiable  with a value
let globalVariable = 'Welcome'

// create a function outer 
function outer() {
   //alert the globalVariables
   alert(globalVariable)
    

   // creat a varaiable  with a value
   let course = 'Holberton'

   // create a function inner
   function inner() {
    //alert the globalVariables and course
       alert(globalVariable+ " "+ course)

       
       let exclamation = '!'

       // create a function inception
       function inception() {
         //alert the globalVariables, course and exclamation
             alert(globalVariable+" "+ course+ exclamation)      
       }
       // call the function
       inception()
    }
    // call the function
    inner()
}
// call the function
outer()