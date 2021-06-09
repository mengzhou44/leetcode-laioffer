/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function (nums) {
    let m = nums.length
    let pointers = new Array(m)
    for (let i = 0; i < pointers.length; i++) {
        pointers[i] = {
            row: i,
            cur: 0
        }
    }

    let minRange = Number.MAX_SAFE_INTEGER
    let res = []

    while (true) {

        let { minPointer, maxPointer } = findRangePointers()

        let min = getPointerValue(minPointer)
        let max = getPointerValue(maxPointer)
        if (minRange > max - min) {
            minRange = max - min
            res = [min, max]
        }

        minPointer.cur++

        if (isEnd(minPointer)) break
    }

    return res

    function findRangePointers() {
        let minPointer = pointers[0]
        let maxPointer = pointers[0]
        for (let pointer of pointers) {
            let val = getPointerValue(pointer)
            if (val < getPointerValue(minPointer)) {
                minPointer = pointer
            }

            if (val > getPointerValue(maxPointer)) {
                maxPointer = pointer
            }
        }

        return { minPointer, maxPointer }
    }

    function getPointerValue(pointer) {
        let { row, cur } = pointer
        return nums[row][cur]

    }

    function isEnd(pointer) {
        let { row, cur } = pointer
        return cur === nums[row].length
    }

}