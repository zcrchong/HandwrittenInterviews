var permute = function(nums) {
    let res = [] , track = []
    let used = new Array(nums.length).fill(false)

    const backtrack = function (track , used , nums) {
        if(track.length === nums.length){
            res.push([...track])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if(used[i]){
                continue
            }
            track.push(nums[i])
            used[i] = true
            backtrack(track, used, nums);
            used[i] = false
            track.pop()
        }
    }
    backtrack(track , used , nums)
    return res
}
console.log(permute([1, 2, 3])); // 输出：[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
console.log(permute([0, 1])); // 输出：[[0, 1], [1, 0]]
console.log(permute([1])); // 输出：[[1]]
