const prompt = require("prompt-sync")()
let speed = +prompt("Enter the speed:")
//speed limit set to 70 initially and points to start counting from 0
const limit = 70;
let demeritPoints = 0;
//checks if the speed is as required
//outputs ok if is less than 70
//else calculates demerit points
//outputs demeritpoints where they are less than or equal 12
//and licence suspended where demerit points are greater than 12
if (speed<= limit){
    console.log("Speed OK")
}else 
{
    demeritPoints = (speed - limit)/5
    if (demeritPoints<=12){
        console.log(`points: ${points}`)
    }
    else(console.log(`License suspended, ${points} points`))
}

