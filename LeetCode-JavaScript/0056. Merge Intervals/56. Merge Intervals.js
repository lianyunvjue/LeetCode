/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * 1.将数组中的区间按照起始位置排序
 * 2.用curr数组记录当前合并的最大区间,遍历数组中的每一个区间,如果当前区间的起始位置小于curr的终点位置,则可以继续合并,所以合并并更新curr的起始和终止位置
 * 如果当前区间的起始位置大于curr的终止位置,则无法合并.所以将curr加入到result里,并用当前的区间替换curr的值.
 */
var merge = function (intervals) {
  if (intervals.length < 2) {
    return intervals;
  }
  intervals.sort(function (a, b) {
    return a[0] - b[0];
  });

  let curr = intervals[0];
  let result = [];

  for (let interval of intervals) {
    if (curr[1] >= interval[0]) {
      curr[1] = Math.max(curr[1], interval[1]);
    } else {
      result.push(curr);
      curr = interval;
    }
  }

  if (curr.length !== 0) {
    result.push(curr);
  }

  return result;
};