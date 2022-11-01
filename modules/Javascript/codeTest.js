function removeNumInArray(array, num) {
    let i = 0;
    for (i =0; i < array.length;) {
      if (array[i] === num) {
        array.splice(i, 1);
      } else {
        i++;
      }
    }
    return array;
  }

  let num1 = [1,2,3,4,3,5,2,2]

  console.log(removeNumInArray(num1,2));



  let allStudentData_3 = [
          {
              id: 1,
              name: 'haRrY poTteR',
          },
          {
              id: 2,
              name: 'KiNG koNG',
          },
          {
              id: 3,
              name: 'laNa geRe',
          },
          {
              id: 4,
              name: 'cHaSe LAN',
          },
          {
              id: 5,
              name: 'mAYa paSha',
          }
     ]


     function titleCaseAllStudentNames(allStudentData) {
        for (i=0; i < allStudentData; i++) {
            let string = allStudentData[i].name
            console.log(string);
    /*
            if (p === 'name') {
                let splitsent = 'name'.toLowerCase().split(' ')
                let titleWords = ' '
                for(let i=0; i < splitsent.length; i++) {
                    titleWords += splitsent[i].charAt(0) + splitsent[i].toLowerCase().slice(1) + ' '
                }
                return titleWords.trim();  
            }
          } */
        } 
    }
        console.log(titleCaseAllStudentNames(allStudentData_3))