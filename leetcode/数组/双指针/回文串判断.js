var isPalindrome = function(s) {
    let left = 0 , right = s.length - 1
    while (left < right){
        if(s.charAt(left) !== s.charAt(right)){
            return false
        }
        left++
        right--
    }
    return true
}
console.log(isPalindrome('') === true, '测试用例1失败');
console.log(isPalindrome('a') === true, '测试用例2失败');
console.log(isPalindrome('aa') === true, '测试用例3失败');
console.log(isPalindrome('ab') === false, '测试用例4失败');
console.log(isPalindrome('aba') === true, '测试用例5失败');
console.log(isPalindrome('abc') === false, '测试用例6失败');
console.log(isPalindrome('abccba') === true, '测试用例7失败');
console.log(isPalindrome('abcdcba') === true, '测试用例8失败');
console.log(isPalindrome('abcddcba') === false, '测试用例9失败');
