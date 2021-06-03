/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (s === '') return ''

    let map = createMap(t)
    let mapSize = map.size
    let index = 0
    let minLen = Number.MAX_SAFE_INTEGER
    let matchCount = 0
    let left = 0
    for (let right = 0; right < s.length; right++) {
        if (!map.has(s[right])) continue

        let count = map.get(s[right]) - 1
        map.set(s[right], count)

        if (count === 0) {
            matchCount++
            while (matchCount === mapSize) {
                let len = right - left + 1
                if (minLen > len) {
                    index = left
                    minLen = len
                }

                if (map.has(s[left])) {
                    let count = map.get(s[left]) + 1
                    map.set(s[left], count)
                    if (count === 1) {
                        matchCount--
                    }
                }

                left++
            }
        }

    }

    if (minLen === Number.MAX_SAFE_INTEGER) return ''

    return s.substring(index, index + minLen)

    function createMap(t) {
        let map = new Map()
        for (let ch of t) {
            if (!map.has(ch)) {
                map.set(ch, 0)
            }
            map.set(ch, map.get(ch) + 1)
        }
        return map
    }

}
