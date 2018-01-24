// create array 'list' to contain the person objects\
// loop through arr
  // initialize object 'person' as an empy obj.
  // set firstName from arr at index (arr[i][0]) as a property of person
  // set lastName from arr at index (arr[i][1]) as a property of person
  // set gender from arr at index (arr[i][2]) as a property of person
  // find the age , if birth year doesn't have a falsy value,
    // then set a var agePerson as current year - year from arr (arr[i][3])
    // set the age with agePerson value as a property of person
    // else return 'Invalid Birth Year'
  // push the filled person obj to 'list'
// loop through list
  // log as a numbered list + name that contains (firstName + lastName) from current person obj
  // log the the person obj



function changeMe(arr) {
  var list = [];
  for (var i = 0; i < arr.length; i++) {
    var person =  {
                    // firstName;
                    // lastName;
                    // gender;
                    // age;
                  };
    person.firstName = arr[i][0];
    person.lastName = arr[i][1];
    person.gender = arr[i][2];

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
