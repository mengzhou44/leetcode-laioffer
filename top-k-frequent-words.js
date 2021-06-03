/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {

    let map = new Map()
    let queue = []

    for (let word of words) {
        if (!map.has(word)) {
            map.set(word, 0)
        }
        map.set(word, map.get(word) + 1)
    }

    for (let word of map.keys()) {
        addToQueue(word, map.get(word))
    }

    let res = []
    for (let i = 0; i < k; i++) {
        let temp = queue.shift()
        res.push(temp.word)
    }

    return res

    function addToQueue(word, count) {
        if (queue.length === 0) {
            queue.push({ word, count })
        } else {
            let i
            for (i = queue.length - 1; i >= 0; i--) {
                if (queue[i].count < count ||
                    (queue[i].count === count &&
                        queue[i].word > word
                    )) {
                    queue[i + 1] = queue[i]
                } else {
                    break
                }
            }
            queue[i + 1] = {
                word, count
            }
        }
    }

};