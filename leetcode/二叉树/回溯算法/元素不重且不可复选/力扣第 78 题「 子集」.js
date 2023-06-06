// 子集（元素无重不可复选）
function subsets(nums) {
    const res = []
    const track = []
    const backtrack = (start) => {
        res.push([...track])
        for (let i = start; i < nums.length; i++) {
            track.push(nums[i])
            backtrack(i+1)
            track.pop()
        }
    }
    backtrack(0)
    return res
}
