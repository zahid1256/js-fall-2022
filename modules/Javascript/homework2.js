const sentence1 = 'Hello Dear, how are you doing?'
let sentence1Length = sentence1.length
let result1 = sentence1Length >= 15 ? 15 : 10
console.log(`\nresult1 --> ${result1}`)

const sentence2 = 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWser history AND thEY wont LEaVE other TRACes'
let mySentenceAfterReplace = sentence2.replace('a','Alpha')
console.log(`\nmySentenceAfterReplace --> ${mySentenceAfterReplace}`);

const sentence3 = "HeALTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL"
let lengthOfSentence3 = sentence3.length
console.log(`\nLength of Sentence 3 --> ${lengthOfSentence3}`);


let sentence3LowerCase = sentence3.toLowerCase()
let result = sentence3LowerCase.startsWith('health') 
console.log(`\nDoes sentence 3 start with health--> ${result}`)


let sentence3LowerCase2 = sentence3.toLowerCase()
let doesSentence3IncludeBody = sentence3.includes('body')
let result3 = sentence3.includes('body')
console.log(`Does sentence 3 contain body--> ${result3}`)

let sentence3LowerCase3 = sentence3.toLowerCase()
let indexOfSentence3 = sentence3.indexOf('body')
let result4 = sentence3.indexOf('body')
console.log(`What is index of body--> ${result4}`); //I'm not sure why my result is coming as -1 //

let sentence3Length = sentence3.length
let sentence3CharAt = sentence3.charAt(69)
console.log(`The last character in sentence 3--> ${sentence3CharAt}`);

let sentence3IncludeBody = sentence3.includes('BoDy')
console.log(`Is word 'BoDy' present only once--> ${sentence3IncludeBody}`);
