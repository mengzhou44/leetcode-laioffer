var nextGreaterElement = function (nums1, nums2) {

    let res = []
    for (let num of nums1) {
        let index = nums2.indexOf(num) + 1
        while (index < nums2.length) {
            if (nums2[index] > num) {
                res.push(nums2[index])
                break
            }
            index++
        }
        if (index === nums2.length) {
            res.push(-1)
        }
    }

    return res
};



/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {


    let map = new Map()
    let stack = []

    for (let i = nums2.length - 1; i >= 0; i--) {

        while (stack.length !== 0 && nums2[i] > stack[stack.length - 1]) {
            stack.pop()
        }

        if (stack.length === 0) {
            map.set(nums2[i], -1)
        } else {
            map.set(nums2[i], stack[stack.length - 1])
        }

        stack.push(nums2[i])

    }

    let res = []
    for (let num of nums1) {
        res.push(map.get(num))
    }

    return res
};