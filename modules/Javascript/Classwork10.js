let sports = ['Football', 'Soccer', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong'];

let index = 0;
let string1 = 'ping pong'
for (let sName of sports) {
    if (sName.toLowerCase().localeCompare(string1) !== 0) {
        console.log(sName);
    }
    index++;
}

let favSports = ['Baseball', 'Football', 'Soccer', 'Baseball', 'Fishing', 'Baseball', 'Ping pong', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];
let indexAns = -1

for (let i=0 ; i <= favSports.length-1 ; i++){
    if(favSports[i].toLowerCase().toLocaleCompare === 'baseball') {
        indexAns= i
    }   break; 
}