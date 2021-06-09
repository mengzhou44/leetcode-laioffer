/**
 * Definition for knows()
 *
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function (knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return function (n) {
        let candidate = 0

        for (let index = 1; index < n; index++) {
            if (knows(candidate, index)) {
                candidate = index
            }
        }

        for (let i = 0; i < n; i++) {
            if (i === candidate) continue

            if (!knows(candidate, i) && knows(i, candidate)) {
                continue
            }

            return -1
        }

        return candidate

    };

};
