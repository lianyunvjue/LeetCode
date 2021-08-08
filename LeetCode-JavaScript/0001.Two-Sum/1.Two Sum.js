/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numsMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        const targetNum = target - nums[i];
        if (numsMap.has(targetNum)) {
            return [numsMap.get(targetNum), i]
        } else {
            numsMap.set(nums[i], i)
        }
    }
    return []
};