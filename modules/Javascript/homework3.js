let countryName = 'Japan'
let countryNameSplit = countryName.split('')
console.log(`(Q1) Length of Country--> ${countryNameSplit.length}`)

const sentence2 = "HeAlTh wAs EArlIer said To Be the AbILityY of the bOdY funcTiOnInG WElL"
let sentence2Split = sentence2.split(' ').length
console.log(`\n(Q2) Number of words in sentence 2 --> ${sentence2Split}`);

let sentenceabbr1 = 'you live Only once'
let array = sentenceabbr1.split(' ')
let abbr = array[0].charAt(0)
let string1 = array[1].charAt(0)
let string2 = array[2].charAt(0)
let string3 = array[3].charAt(0)
abbr = abbr.concat(string1)
abbr = abbr.concat(string2)
abbr = abbr.concat(string3)
abbr = abbr.toUpperCase()
console.log(`\n(Q3)abbr for sentence1 -> ${abbr}`); //I have a feeling this code could've been a lot shorter//

let sentenceabbr2 = 'you Never waLK ALONe'
let array2 = sentenceabbr2.split(' ')
let abbr2 = array2[0].charAt(0)
let string_1 = array2[1].charAt(0)
let string_2 = array2[2].charAt(0)
let string_3 = array2[3].charAt(0)
abbr2 = abbr2.concat(string_1)
abbr2 = abbr2.concat(string_2)
abbr2 = abbr2.concat(string_3)
abbr2 = abbr2.toUpperCase()
console.log(`abbr for sentence2 --> ${abbr2}`);


let sentence4 = 'you live Only once'
let sentence4_TitleCase = sentence4.split(' ')
let firstLetter = sentence4_TitleCase[0].charAt(0)
let word1 = sentence4_TitleCase[1].toUpperCase(0)



