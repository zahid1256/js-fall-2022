let planets = ['plUtO', 'URANUS', 'A', 'B', 'Saturn', 'JupiTEr', 'LOL', 'Mercury', 'EaRtH']
planets.unshift('mars')
planets.splice(4,0,'Venus')
console.log(`planets1--> ${planets}`);


console.log(planets.length-1);