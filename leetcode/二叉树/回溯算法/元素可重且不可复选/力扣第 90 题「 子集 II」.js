// 注意：javascript 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
// 本代码还未经过力扣测试，仅供参考，如有疑惑，可以参照我写的 java 代码对比查看。

var subsetsWithDup = function (nums) {
    let res = []
    let track = []
    nums.sort((a, b) => a - b)
    const backtrack = function (nums, start) {
        // 每个前序位置都是一个子集
        res.push([...track])
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) {
                continue
            }
            track.push(nums[i])
            backtrack(nums,i + 1)
            track.pop()
        }
    }
    backtrack(nums, 0)
    return res
}
