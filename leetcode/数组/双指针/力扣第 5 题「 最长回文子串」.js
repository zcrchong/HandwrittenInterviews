// 在 s 中寻找以 s[l] 和 s[r] 为中心的最长回文串
var palindrome = function (s, l, r) {
    while (l >= 0 && r <= s.length - 1 && s[l] === s[r]) {
        l--
        r++
    }
    return s.substring(l + 1, r)
}
var longestPalindrome = function(s) {
    if(s.length === 0 || s.length === 1) return s
    var res = ""
    for (let i = 0; i < s.length - 1; i++) {
        let res1 = palindrome(s,i,i)
        let res2 = palindrome(s,i,i+1)
        res = res1.length < res.length ? res : res1
        res = res2.length < res.length ? res : res2
    }
    return res
}
console.log(longestPalindrome("babad")) // 输出 "bab" 或 "aba"
console.log(longestPalindrome("cbbd")) // 输出 "bb"
console.log(longestPalindrome("a")) // 输出 "a"
console.log(longestPalindrome("ac")) // 输出 "a" 或 "c"
