// prompts to input the speed of the car
const prompt = require("prompt-sync")();
let speed = +prompt("Enter the speed:")
//speed limit set to 70 initially and points to start counting from 0
const limit = 70;
let demeritPoints = 0;
//checks if the speed is as required
//outputs ok if is less than 70
//else calculates demerit points

if (speed<= limit){
    console.log("OK")
}else {
    demeritPoints = (speed - limit)/5
    if (demeritPoints<=12){
        console.log(`Demerit points: ${demeritPoints}`)
    }
    else(console.log(`Licence suspended, ${demeritPoints} points`))
}