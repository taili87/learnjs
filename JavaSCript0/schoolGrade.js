

let getMyGrade = function(currentMarks, totalMarks){
      let myPercent = (currentMarks/totalMarks) * 100;
      let myGrade = ''

      if (myPercent>=90) {
          myGrade = 'A'
      }else if(myPercent>=80){
          myGrade = 'B'
      }else if (myPercent>=70){
          myGrade = 'C'

      }else if(myPercent>=60){
          myGrade = 'F'
      }else{
          console.log('Did not attend class')
      }

      return `Your grade is ${myGrade} and Percentage is ${myPercent}`
}

console.log(getMyGrade(92,100))
