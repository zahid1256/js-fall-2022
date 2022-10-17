
// Q1 //
const sports = ['Football', 'Soccer', 'Baseball', 'Rugby'];
/**if basketball is present but not in index 2
 *      print "BASKETBALL is present at index-2"
 * if BASKETBALL is present in index-2 
 *      print "BASKETBALL is present at index-2"
 * if BASKETBALL is NOT present in the array
 *     
**/

if (sports.includes('BASKETBALL') && (sports.indexOf('BASKETBALL') !== 2)) {
    console.log('\n(Q1)BASKETBALL is present at index-2'); 
}else if (sports.indexOf('BASKETBALL') === 2) {
    console.log('\n(Q1)BASKETBALL is present at index-2');
} else  {
    console.log(`(Q1)Replaced value --> ${sports.splice(2,1,'BASKETBALL')}`);
}

// Q2 //
let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto']; 

if (planets.indexOf('Earth') === 1) {
    console.log("\n(Q2)Earth is mentioned in expected index");
}else   {
    planets.splice(1,0,'Earth')
    console.log(`\n(Q2)New Array --> ${planets}`);
} 


// Q3 //
/** Create variable to store Student Score
 * Create variable to to store Max Score
 * Based on Student Percentage, print the grade
 * Create variable to store gradings
 * if studenScore is invlaid and more than maxScore, print "invalid sutdent score"
 * if student score and maxScore are valid, then print "Your percentage is XX>yy and your Grade is Z"
 */

let studentScore = 95
let maxScore = 100

if (maxScore != 100.00) {
    console.log(`\n(Q2)invalid Student Score`);
    return
}

if ((studentScore < 0) || (studentScore > maxScore)) {
    console.log('\n(Q2)Invalid student score');
    return
}

if (studentScore >= 91) {
    grade = 'A'
}
else if (studentScore >= 81) {
    grade = 'B'
} 
else if (studentScore >= 71) {
    grade = 'C'
} 
else if (studentScore >= 61) {
    grade = 'D'
} 
else if (studentScore >= 51) {
    grade = 'E'
} 
else {
    grade = 'F'
}

console.log(`\n(Q3)Your percentage is ${studentScore.toFixed(2)} and your grade is ${grade}`);


// Q4//

myNumber = 10
 
if ((myNumber% 5 === 0) && (myNumber% 3 === 0)) {
    console.log(`\n(Q4)Divisible by 5 and 3`)
}  
else if (myNumber% 5 === 0) {
    console.log(`\n(Q4)Divisible by 5`);
}
else if (myNumber% 3 === 0) {
    console.log(`\n(Q4)Divisible by 3`);
} 
else {
    console.log(`\n(Q4)Value--> ${myNumber}`);
}
