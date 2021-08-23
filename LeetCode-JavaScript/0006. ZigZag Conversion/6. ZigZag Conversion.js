/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var size = 2 * numRows - 2,
        len = s.length,
        result = '',
        mid,
        i,
        j;
    
    if (numRows === 1) {
        return s;
    }
    
    for (i = 0; i < numRows; i++) {
        for (j = i; j < len; j += size) {
            result += s.charAt(j);
            
            // for the middle ones, excluding first row and last row
            if (i !== 0 && i !== numRows - 1) {
                mid = j + size - 2 * i;
                
                if (mid < len) {
                    result += s.charAt(mid);
                }
            }
        }
    }
    
    return result;
};