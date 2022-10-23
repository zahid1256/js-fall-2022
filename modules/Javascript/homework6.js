let student1_1 = {
    name : 'John Doe',
    state : 'NJ',
    age : 20,
    gender : 'M',
    paymentMethod : 'finance',
    anyExperience : true,
    pastJobs : [
        {
            companyName : 'ABC',
            numOfYears : 2,
            title : 'DEF'
        },
        {
            companyName : 'EFG',
            numOfYears : 3,
            title : 'HIJ'
        },
        {
            companyName : 'KLM',
            numOfYears : 4,
            title : 'NOP'
        }
    ],
    knownSkills: ['Java', 'Manual testing', 'Js basics', 'Programming', 'CS basics']

}

    for (exp in student1_1){
        if (exp !== 'pastJobs' && exp !== 'knownSkills') {
            console.log(`${exp} : ${student1_1[exp]}`);
        }  else if (exp === 'pastJobs') {
            let pastJobsStatus = ''
            if (student1_1.anyExperience) {
                pastJobsStatus = `Yes (${student1_1[exp].length})`
            } else {
                pastJobStatus = 'No'
            }
            console.log(`${exp} : ${pastJobsStatus}`);
            for (prop of student1_1[exp]) {

                for (jobExp in prop) {
                    console.log(`\t${jobExp} : ${prop[jobExp]}`);
                }
            }
        
        } else {
            let knownSkillsStatus = ''
            if (student1_1.knownSkills) {
                knownSkillsStatus = `${student1_1.knownSkills.length} (${student1_1[exp]})`
            }  
             console.log(`${exp} : ${knownSkillsStatus}\n`);
            
        }
    }
console.log(`=========================================================================================`);



let student1_2 = {
    name : 'Eli hen',
    state : 'NY',
    age : 22,
    gender : 'F',
    paymentMethod : 'Paid',
    anyExperience : false,
    pastJobs : [],
    knownSkills: ['Java', 'Manual testing', 'CS basics']


}

for (exp in student1_2) {
        if (exp !== 'pastJobs' && exp !== 'knownSkills') {
            console.log(`${exp} : ${student1_2[exp]}`);
        }  else if (exp === 'pastJobs') {
            let pastJobsStatus = ''
            if (student1_2.anyExperience) {
                pastJobsStatus = `Yes (${student1_2[exp].length})`
            } else {
                pastJobsStatus = 'No'
            }
            console.log(`${exp} : ${pastJobsStatus}`);
            for (prop of student1_2[exp]) {

                for (jobExp in prop) {
                    console.log(`\t${jobExp} : ${prop[jobExp]}`);
                }
            }
        
        } else {
            let knownSkillsStatus = ''
            if (student1_2.knownSkills) {
                knownSkillsStatus = `${student1_2.knownSkills.length} (${student1_2[exp]})`
            }  
             console.log(`${exp} : ${knownSkillsStatus}`);
            
        }
    }
console.log(`========================================================================================`);



//Q2//

let favSports_1 = ['Football', 'Soccer', 'Fishing', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];
let favSports_2 = ['Football', 'Soccer', 'BaseBall', 'Ping pong', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];
let favSports_3 = ['Football', 'Soccer', 'Baseball', 'Fishing', 'Baseball', 'Ping pong', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];

let indexAns = -1 
let count = 0

for (let i=0 ; i < favSports_2.length ; i++) {
    if (favSports_2[i].toLowerCase().localeCompare('baseball') === 0) {
        count += 1
        if (count == 2) {
            indexAns = i
            console.log(`\n\n\nIndex of second occurrence of 'baseball'--> ${indexAns}`); 
            break;
        }
    
        
}

    if (count == 0 ) {
        console.log(`\nBaseball is not present in the given array`);
    }
    else if (count == 1){
        console.log(`\nBaseball is present only once in array`);
    }

    








//Q3//

let student3_1 = {
    name : 'John Doe',
    state : 'NJ',
    age : 20,
    gender : 'M',
    paymentMethod : 'finance',
    anyExperience : true,
    pastJobs : [
        {
            companyName : 'ABC',
            numOfYears : 2,
            title : 'DEF'
        },
        {
            companyName : 'EFG',
            numOfYears : 3,
            title : 'HIJ'
        },
        {
            companyName : 'KLM',
            numOfYears : 4,
            title : 'NOP'
        }
    ],
    knownSkills: ['Java', 'Manual testing', 'Js basics', 'Programming', 'CS basics']
}


let student3_2 = {
    name : 'Eli hen',
    state : 'NY',
    age : 22,
    gender : 'F',
    paymentMethod : 'Paid',
    anyExperience : false,
    pastJobs : [],
    knownSkills: ['Java', 'Manual testing', 'CS basics']
}






function numOfExp(student)
{   let sum = 0
    let name = student.name
    if ((student.anyExperience) ){
        for (let i = 0; i < student.pastJobs.length; i++){
            sum+= student.pastJobs[i].numOfYears
        }
        return name+ " has a total of "+ sum+"-years of experience"
    }
    else {
        return name + " has no past experience"
        }
}
students = [student3_1,student3_2]
for (let i = 0; i<students.length;i++){
    console.log(`\n${numOfExp(students[i])}`) 
}
}