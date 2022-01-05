// 2124. Check if All A's Appears Before All B's
// Given a string s consisting of only the characters 'a' and 'b', return true if every 'a' appears before every 'b' in the string. Otherwise, return false.

// My solution:

// var checkString = function(s) {
    
//     for (let i = 0; i < s.length; i++) {
//         if (s.includes("ba")) {
//             return false
//         } else {
//             return true
//         }
//     }
    
// };

// Updated Solution:

var checkString = function(s) {
    if (s.includes("ba")) {
        return false
    } else {
        return true
    } 
};