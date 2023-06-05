var lengthOfLongestSubstring = function(s) {
    let window = {} , left = 0 , right = 0
    let res = 0
    while (right < s.length){
        let rightStr = s[right]
        right++
        if(window[rightStr]){
            window[rightStr]++
        } else {
            window[rightStr] = 1
        }
        while (window[rightStr] > 1){
            let leftStr = s[left]
            left++
            window[leftStr]--
        }
        res = Math.max(res, right - left)
    }
    return res
}
console.log(lengthOfLongestSubstring("abcabcbb")) // 3
console.log(lengthOfLongestSubstring("bbbbb")) // 1
console.log(lengthOfLongestSubstring("pwwkew")) // 3
console.log(lengthOfLongestSubstring("")) // 0
console.log(lengthOfLongestSubstring("aab")) // 2
