/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {

    if (s.length < 2) return s.length

    let m = s.length

    let dp = new Array(m)
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(m).fill(0)
    }

    for (let i = m - 1; i >= 0; i--) {
        dp[i][i] = 1
        for (let j = i + 1; j < m; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
            }
        }
    }

    return dp[0][m - 1]

};