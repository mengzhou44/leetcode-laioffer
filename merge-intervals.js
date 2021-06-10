/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length < 2) return intervals

    intervals = intervals.sort((a, b) => a[0] - b[0])

    let prev = intervals.shift()
    let res = []
    for (let interval of intervals) {
        if (interval[0] > prev[1]) {
            res.push(prev)
            prev = interval
        } else {
            if (interval[1] >= prev[1]) {
                prev[1] = interval[1]
            }
        }
    }

    res.push(prev)

    return res

};