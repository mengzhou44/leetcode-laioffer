var letterCombinations = function (digits) {
    if (digits === '') return []

    let map = new Map()
    map.set("2", "abc")
    map.set("3", "def")
    map.set("4", "ghi")
    map.set("5", "jkl")
    map.set("6", "mno")
    map.set("7", "pqrs")
    map.set("8", "tuv")
    map.set("9", "wxyz")

    let res = []
    dfs(0)

    return res

    function dfs(index, cur = []) {

        if (cur.length === digits.length) {
            res.push(cur.join(''))
            return
        }

        let letters = map.get(digits[index])

        for (let ch of letters) {
            dfs(index + 1, [...cur, ch])
        }
    }

}