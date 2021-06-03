/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {

    let dp = new Array(amount + 1).fill(0)
    dp[0] = 1

    for (let coin of coins) {
        for (let x = coin; x < amount + 1; x++) {
            dp[x] += dp[x - coin]
        }
    }

    return dp[amount]
};