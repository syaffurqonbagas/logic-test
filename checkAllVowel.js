function checkVocal(string) {
  // Start Code Here
  function checkVocal(string) {
    // Start Code Here
    if (string.match(/[^aeiou]/gi)) {
      return false
    } else {
      return true
    }
  }

}

console.log(checkVocal('iueoaAAaAA')) //output: true
console.log(checkVocal('iuesdoaAAasfaAA')) //output: false
console.log(checkVocal('iEEuoaAAaAA')) //output: true
console.log(checkVocal('iuesdoaAAasfaAA')) //output: false
console.log(checkVocal('iueoaAIIUUaAA')) //output: true
console.log(checkVocal('iuedoaAAasfaAAmmCCB')) //output: false