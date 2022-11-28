// determine the student letter grade
const prompt = require("prompt-sync")();
let numberGrade = prompt("Enter Student marks : ")
let letterGrade = function(numberGrade) {
    let grade;
    if (numberGrade >= 79) {
      grade = 'A';
    } else if (numberGrade >= 60) {
      grade = 'B';
      return letter;
    } else if (numberGrade >= 70) {
      grade = 'C';
    } else if (numberGrade >= 40) {
      grade = 'D';
    } else {
      grade = 'E';
    }
    return grade;
    
  }
  console.log(letterGrade());

  
  // log grades to terminal
  