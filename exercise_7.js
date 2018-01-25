
// timeLeft = 66-15(51) count+1 makanTerusRekursif(timeLeft) =>
// timeLeft = 51-15(46) count+1 makanTerusRekursif(timeLeft) =>

function makanTerusRekursif(waktu) {
  var timeCount;
  var timeLeft;
  var count;

  if ( (typeof waktu === 'object') ){ // [timeLeft, count]
    timeCount = waktu;
    timeLeft = timeCount[0];
    count = timeCount[1];
  } else{ // still not in obj form
    count = 0;
    timeLeft = waktu;
  }
  // base

  if (timeLeft <= 0){
    // console.log(count);
    return count;
  }
  // recursive
  timeLeft -= 15;
  count += 1;
  timeCount = [timeLeft, count];
  return makanTerusRekursif(timeCount);
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0
