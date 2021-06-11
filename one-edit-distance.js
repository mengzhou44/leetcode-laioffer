/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function (s, t) {

    if (s.length < t.length) return isOneEditDistance(t, s)

    if (s.length - t.length > 1) return false

    if (s.length - t.length === 1) return isOneRemoveDistance(s, t)

    return isOneChangeDistance(s, t)

    function isOneChangeDistance(s, t) {
        let p1 = 0
        let p2 = 0
        let oneChanged = false
        while (p1 < s.length) {
            if (s[p1] !== t[p2]) {
                if (oneChanged === false) {
                    oneChanged = true
                } else {
                    return false
                }
            }
            p1++
            p2++
        }

        return oneChanged
    }

    function isOneRemoveDistance(s, t) {
        let p1 = 0
        let p2 = 0
        let oneRemoved = false
        while (p1 < s.length) {
            if (s[p1] === t[p2]) {
                p1++
                p2++
            } else {
                if (oneRemoved === false) {
                    p1++
                    oneRemoved = true
                } else {
                    return false
                }
            }
        }

        return oneRemoved
    }
};