function changeMe(arr) {
  var list = [];
  // loop through arr
  for (var i = 0; i < arr.length; i++) {
    var person =  {
                    // firstName;
                    // lastName;
                    // gender;
                    // age;
                  };
    // push firstName into object
    person.firstName = arr[i][0];
    person.lastName = arr[i][1];
    person.gender = arr[i][2];
    // find the age , if birth year is undefined log invalid
      if (arr[i][3] !== undefined){
        var agePerson = 2018 - arr[i][3];
        person.age = agePerson;
      } else{
        person.age = 'Invalid Birth Year';
      }
    list.push(person)
  }
 for (var j = 0; j < list.length; j++) {
   console.log(String(j+1)+'. '+ list[j].firstName +' '+ list[j].lastName +':');
   console.log(list[j]);
 }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
