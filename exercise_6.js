
// 66 => digit = 6*6(36) kaliTerusRekursif(36) => digit = 3*6(18) kaliTerusRekursif(18)
// => digit = 1*8(8) kaliTerusRekursif(8) => return digit
//

function kaliTerusRekursif(angka) {
  var digit = 1;
  var angkaStr = String(angka);
  // base
  if (angkaStr.length === 1){
    return angka;
  }
  // recursive
  for (var i = 0; i < angkaStr.length; i++) {
    digit *= angkaStr[i]
  }
  return kaliTerusRekursif(digit);
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
