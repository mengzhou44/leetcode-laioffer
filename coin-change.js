/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {

    let dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER)
    dp[0] = 0

    for (let i = 1; i < dp.length; i++) {
        for (let coin of coins) {
            if (i >= coin) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1)
            }
        }
    }


    return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount]

};