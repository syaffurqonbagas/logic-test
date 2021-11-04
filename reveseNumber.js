function reverseNumber(number) {
  var temp = 0;
  while (number) {
    temp *= 10;
    temp += number % 10;
    number = Math.floor(number / 10);
  }
  return temp;
}

console.log(reverseNumber(876)); //output: 678
console.log(reverseNumber(2340)); //output: 432
console.log(reverseNumber(1737822)); //output: 2287371
console.log(reverseNumber(124746)); //output: 647421