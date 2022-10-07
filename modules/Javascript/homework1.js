let fTemp1 = 70
let cTemp1= (fTemp1 - 32) / 1.8
cTemp1 = cTemp1.toFixed(2)

console.log(`\n ${fTemp1}°F is equal to ${cTemp1}°C`);

let fTemp2 = 55
let kTemp2 = (fTemp2 + 459.67) * 5/9
kTemp2 = kTemp2.toFixed(2)
console.log(`\n ${fTemp2}°F is equal to ${kTemp2}°K`);

let cTemp3 = 18
let fTemp3 = (cTemp3 * 9/5 + 32)
fTemp3 = fTemp3.toFixed(2)
console.log(`\n ${cTemp3}°C is equal to ${fTemp3}°F`);

let cTemp4 = 32
let kTemp4 = (cTemp4 + 273.15)
kTemp4 = kTemp4.toFixed(2)

console.log(`\n ${cTemp4}°C is equal to ${kTemp4}°K`);

let kTemp5 = 100
let fTemp5 = (kTemp5 * 9/5 - 459.67)
fTemp5 = fTemp5.toFixed(2)
console.log(`\n ${kTemp5}°K is equal to ${fTemp5}°F`);

let kTemp6 = 97
let cTemp6 = (kTemp6 - 273.15)
cTemp6 = cTemp6.toFixed(2)

console.log(`\n ${kTemp6}°K is equal to ${cTemp6}°C`);

