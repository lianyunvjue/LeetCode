/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const substringSet = new Set()
    let i = 0, j = 0, maxLength = 0

    if (s.length === 0) return 0

    for (let i = 0; i < s.length; i++) {
        if (!substringSet.has(s[i])) {
            substringSet.add(s[i])
            maxLength = Math.max(maxLength, substringSet.size)
        } else {
            while (substringSet.has(s[i])) {
                substringSet.delete(s[j])
                j++
            }
            substringSet.add(s[i])
        }
    }
    return maxLength
};