var sortColors = function (nums) {



    let redIndex = 0
    let blueIndex = nums.length - 1
    let i = 0

    while (i <= blueIndex) {
        if (nums[i] === 0) {
            swap(redIndex, i)
            redIndex++
            i++
        } else if (nums[i] === 2) {
            swap(blueIndex, i)
            blueIndex--
        } else {
            i++
        }

    }



    function swap(i, j) {
        [nums[i], nums[j]] = [
            nums[j], nums[i]
        ]
    }
};