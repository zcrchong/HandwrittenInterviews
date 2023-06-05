var findAnagrams = function (s, t) {
    var need = new Map()
    var window = new Map()
    for (let i = 0; i < t.length; i++) {
        if (need.has(t[i])) {
            need.set(t[i], need.get(t[i]) + 1)
        } else {
            need.set(t[i], 1)
        }
    }
    var left = 0, right = 0, valid = 0
    var res = []
    while (right < s.length) {
        let rightStr = s[right]
        right++
        if (need.has(rightStr)) {
            if (window.has(rightStr)) {
                window.set(rightStr, window.get(rightStr) + 1)
            } else {
                window.set(rightStr, 1)
            }
            if (window.get(rightStr) === need.get(rightStr)) {
                valid++
            }
        }

        while (right - left >= t.length) {
            if (valid === need.size) {
                res.push(left)
            }
            let leftStr = s[left]
            left++
            if (need.has(leftStr)) {
                if (need.get(leftStr) === window.get(leftStr)) {
                    valid--
                }
                window.set(leftStr, window.get(leftStr) - 1)

            }
        }
    }
    return res
}
const s1 = "cbaebabacd";
const t1 = "abc";
console.log(findAnagrams(s1, t1)); // 输出：[0, 6]

const s2 = "abab";
const t2 = "ab";
console.log(findAnagrams(s2, t2)); // 输出：[0, 1, 2]
