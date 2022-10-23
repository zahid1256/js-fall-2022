/**for (let counter = 3 ; counter <= 5 ; counter++) {
    console.log(`Hello World`);
} **/

 //sport = ['Football', 'Soccer', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong'] //

/**(ind = sports[0].toLowerCase().includes('o')|| sports[0].length > 5 && sports[0].length < 10)
    */

/**for (let ind = 0 ; ind < sports.length ; ind++) {
    if (sports[ind].toLowerCase().includes('o') || (sports[ind].length > 5 && sports[ind].length < 10)) {
        console.log(sports[ind]);
    }
}

const names = ['JAson', 'heather', 'lacy', 'thomas', 'rob']
for (let ind = 0 ; names.length > ind ; ind++)
    if (names[ind].toLowerCase().includes('a') || names[ind].length >3 && names[ind].length <7) {
        console.log(names[ind]);
    }
*///

const sports = ['FootBall', 'soCCer', 'BasEbAll', 'Rugby', 'BASKETBALL', 'Ping pong'];
let reverseSports=[]

for (let counter = sports.length-1 ; counter >= 0 ; counter--) {
    reverseSports[sports.length-1-counter] = sports[counter];
} console.log(`reversed sports --> ${reverseSports}`);


const planets = ['EartH', 'MerCury', 'VeNUs', 'JuPIter', 'Saturn', 'PluTO']
let reversePlanets = []

for (let i = planets.length-1 ; i >= 0 ; i--) {
    reversePlanets[planets.length-1-i] = planets[i];
}   console.log(`planets reversed --> ${reversePlanets}`);

let temp ='';
let tempArr = planets[i].toLowerCase().split(' ') 
for (let i=0 ; i < tempArr.length ; i++); {
   temp = temp + tempArr[i].charAt(0).toUpperCase() + tempArr[i].substring(1)
} 
reversePlanets[opp] = temp