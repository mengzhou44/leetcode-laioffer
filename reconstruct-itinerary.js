/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
    let map = buildGraph(tickets)
    let result = []

    dfs('JFK')

    return result

    function dfs(city, path = ['JFK']) {

        if (path.length === tickets.length + 1) {
            result = path
            return true
        }

        const toList = map.get(city);
        if (toList) {
            for (let i = 0; i < toList.length; i++) {
                const [to] = toList.splice(i, 1);
                if (dfs(to, [...path, to])) {
                    return true
                }

                toList.splice(i, 0, to);
            }
        }

        return false
    }

    function buildGraph(tickets) {
        let map = new Map()
        for (let [from, to] of tickets) {
            if (!map.has(from)) {
                map.set(from, [])
            }

            let array = map.get(from)
            array.push(to)

        }


        for (let array of map.values()) {
            array = array.sort((a, b) => {
                if (a > b) return 1
                if (a === b) return 0
                return -1
            })
        }

        return map
    }

};


