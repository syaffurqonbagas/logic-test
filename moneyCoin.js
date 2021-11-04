function moneyCoins(money) {
  // Start Code Here

}

// Drive code
console.log(moneyCoins(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(moneyCoins(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(moneyCoins(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]


function amountTocoins(amount, coins) {
  if (amount === 0) {
    return [];
  }
  else {
    if (amount >= coins[0]) {
      left = (amount - coins[0]);
      // console.log(left)
      return [coins[0]].concat(amountTocoins(left, coins));

    }
    else {
      coins.shift();
      return amountTocoins(amount, coins);
    }
  }
} 