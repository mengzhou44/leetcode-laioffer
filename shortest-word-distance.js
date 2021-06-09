/**
* @param {string[]} wordsDict
* @param {string} word1
* @param {string} word2
* @return {number}
*/
var shortestDistance = function (wordsDict, word1, word2) {
    let word1Pos = -1
    let word2Pos = -1
    let distance = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < wordsDict.length; i++) {
        if (wordsDict[i] === word1) {
            word1Pos = i
        }
        else if (wordsDict[i] === word2) {
            word2Pos = i
        }

        if (word1Pos != -1 && word2Pos != -1) {
            distance = Math.min(distance, Math.abs(word2Pos - word1Pos))
        }

    }

    return distance
};