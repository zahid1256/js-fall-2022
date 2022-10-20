//Q1//
 let numbers = [23, 12, 43, 10, 5, -10];
 var sum = 0;

 for (let i=0 ; i < numbers.length ; i++) {
    sum = sum + numbers[i]
 } 
    average = sum/ numbers.length;
    console.log(`(Q1)Average of numbers --> ${average.toFixed(2)}`);


//Q2//

let str2 = 'have a great day'
let reverseStr2 = []
str2 = str2.split(' ')

for (let i=str2.length-1 ; i >= 0 ; i--) {
    reverseStr2[str2.length-1-i] = str2[i]
} console.log(`\n(Q2)reverseStr2 --> ${reverseStr2.join(' ')}`);


//Q3//
/**
 * split the string to make it into an array
 * make array uppercase
 * extract the first letter of array 
 * concat all extracted letters from array
 * 
 */

let str3 = 'you Never waLK ALONe every day';
let abbr1 = ''
let abbr = str3.toUpperCase().split(' ')
console.log(abbr);
for (let i=0 ; i < abbr.length ; i++) {
    let temp = abbr[i].charAt(0);
    if (i==0){
        abbr1 = temp
    }  
    else (
        abbr1 = abbr1.concat(temp) 
    )
}
    console.log(`\n(Q3)abbr-->${abbr1}`);

