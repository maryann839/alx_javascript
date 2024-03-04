// create a function createClassRoom
function createClassRoom(numbersOfStudents) {
    function studentSeat(seat){
        return function(){
            return seat;
        }
    }
}

//create a students variaable
let students =[]

for (i = 0; i < numbersOfStudents; ++1) {
students.push(studentSeat(i + 1))

return students;
}

let classRoom = createClassRoom(10)

