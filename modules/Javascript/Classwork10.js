

let favSports = ['Baseball', 'Football', 'Soccer', 'Baseball', 'Fishing', 'Baseball', 'Ping pong', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];
let indexAns = -1

    for (let i = 0 ; i <= favSports.length-1 ; i++) {
        if (favSports[i].toLowerCase().localeCompare('ping pong')===0) {
            indexAns = i;
            break;
        }
            
    }
        console.log(indexAns);
