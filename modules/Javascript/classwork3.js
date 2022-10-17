let dayName = 'mon' ;      // mon, tue, wed, thu, fri, sat, sun
/**
 * 
 * if dayName is mon or wed or fri
 *      print "attend the class"
 * if dayName is tue or sat
 *      print "attend lab session"
 * if dayName is thu
 *      print "self study"
 * if dayName is sun
 *      print "Enjoy"
 **/
 if (dayName.localeCompare('mon') === 0) {
    console.log('attend the class');
 } else {
    console.log('Enter valid name');
 }