/**
 * @param {number[]} nums
 * @return {number[][]}
 * 1.给数组排序
 * 2.遍历数组,从0遍历到length-2(防止越界)
 * 3.如果当前的数字等于前一个数字, 则跳过这个数字(为了去重)
 * 4.如果数字不同,则设置start = i + 1, end = length - 1, 查看i, start和 end 三个数的和比0大还是小,如果比0小, start++, 如果比0大, end--, 如果等于0, 把这三个数加入到结果里.
 * 5.返回结果
 */
var threeSum = function (nums) {
  const result = [];
  nums.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let start = i + 1,
        end = nums.length - 1;
      while (start < end) {
        if (nums[i] + nums[start] + nums[end] === 0) {
          result.push([nums[i], nums[start], nums[end]]);
          start++;
          end--;
          while (start < end && nums[start] === nums[start - 1]) {
            start++;
          }
          while (start < end && nums[end] === nums[end + 1]) {
            end--;
          }
        } else if (nums[i] + nums[start] + nums[end] < 0) {
          start++;
        } else {
          end--;
        }
      }
    }
  }

  return result;
};