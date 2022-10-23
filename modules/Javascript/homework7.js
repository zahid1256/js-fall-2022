//Q1//
function abbrString (userInput) {
    let abbr1 = '';
    let abbr = userInput.split(' ');
 for (i=0 ; i< abbr.length; i++){
    abbr1 = abbr1 + abbr[i].charAt(0).toUpperCase()
 }
 return abbr1
}
console.log(abbrString('you live ONly once'))



//Q2//

function reverseStringByWord (userInput) {
    let resultString = '';
    const arr2 = userInput.split(' ');
    for (let i=arr2.length-1 ; i >= 0 ; i--) {
        resultString = resultString + arr2[i] + ' ';
    }
    return resultString.trim();
}
console.log(reverseStringByWord('have a great day'));









//Q3//

function sentTitle (stringInput) {
    let sentenceTitleCase = ''
    let stringInputSplit = stringInput.toLowerCase().split(' ')
    for (let i = 0; i < stringInputSplit.length; i++) {
        sentenceTitleCase = sentenceTitleCase + stringInputSplit[i].charAt(0).toUpperCase() + stringInputSplit[i].slice(1) + " "
    }
        return sentenceTitleCase

}
        console.log(sentTitle('you only live once'));



