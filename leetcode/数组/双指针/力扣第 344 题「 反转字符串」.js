// 要求原地修改
var reverseString = function(s) {
    // 一左一右两个指针相向而行
    var left = 0 , right = s.length - 1
    while (left < right){
        var temp = s[left]
        s[left] = s[right]
        s[right] = temp
        left++
        right--
    }
    return s
};
console.log(reverseString(["h","e","l","l","o"]).join('') === "olleh", "Test Case 1 Failed");
console.log(reverseString(["H","a","n","n","a","h"]).join('') === "hannaH", "Test Case 2 Failed");
console.log(reverseString(["A","B","C","D"]).join('') === "DCBA", "Test Case 3 Failed");
console.log(reverseString(["1","2","3","4","5"]).join('') === "54321", "Test Case 4 Failed");
console.log(reverseString([""]).join('') === "", "Test Case 5 Failed");
console.log("All test cases passed");
