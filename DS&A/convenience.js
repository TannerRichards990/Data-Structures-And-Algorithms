function changeEnough(coins, amount) {
  var total = 0;
  for (var i = 0; i < coins.length; i++) {
    total += coins[i] * [0.25, 0.1, 0.05, 0.01][i];
  }
  return total >= amount;
}

console.log(changeEnough([2, 100, 0, 0], 14.11));
console.log(changeEnough([0, 0, 20, 5], 0.75));
console.log(changeEnough([30, 40, 20, 5], 12.55));
console.log(changeEnough([10, 0, 0, 50], 3.85));
console.log(changeEnough([1, 0, 5, 219], 19.99));
