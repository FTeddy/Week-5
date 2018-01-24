function mengelompokkanAngka(arr) {
  // create variable output as multiD array with 3 empty arrays
  var output = [ [], [], [] ];
  // loop through arr
  for (var index=0; index<arr.length; index++){
    // if value at index is cleanly divisible by 3
    if (arr[index] %  3 === 0) {
      output[2].push(arr[index]);
    } else {
      if (arr[index] % 2 === 0) {
        output[0].push(arr[index]);
      } else {
        output[1].push(arr[index]);
      }
    }
  }
  return output;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
