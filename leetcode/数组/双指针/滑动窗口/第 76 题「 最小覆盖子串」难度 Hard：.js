// 注意：javascript 代码由 chatGPT🤖 根据我的 cpp 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
// 本代码还未经过力扣测试，仅供参考，如有疑惑，可以参照我写的 cpp 代码对比查看。

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let need = new Map() , window = new Map()
    // 初始化need
    for (let i = 0; i < t.length; i++) {
        if(need.has(t[i])){
            need.set(t[i],need[t[i]] + 1)
        } else {
            need.set(t[i], 1)
        }
    }
    let left = 0 , right = 0 , valid = 0
    // 最后的结果值
    let start = 0 , len = Infinity
    while (right < s.length){
        // rightStr为要进入窗口的字符串
        let rightStr = s[right]
        right++
        if(need.has(rightStr)){
            if(window.has(rightStr)){
                window.set(rightStr,need[rightStr] + 1)
            } else {
                window.set(rightStr, 1)
            }
            if(need[rightStr] === window[rightStr]){
                valid++
            }
        }
        // 左侧窗口收缩:当window窗口中满足具有子串时，左侧left向右移
        while (valid === need.size){
            if(right - left < len){
                start = left
                len = right - left
            }
            let deleteStr = s[left]
            left++
            if(need.has(deleteStr)){
                if(window.get(deleteStr) === need.get(deleteStr)){
                    valid--
                }
                window.set(deleteStr,window[deleteStr] - 1)
            }
        }

    }
    return len === Infinity ? "" : s.substr(start,len)
}
