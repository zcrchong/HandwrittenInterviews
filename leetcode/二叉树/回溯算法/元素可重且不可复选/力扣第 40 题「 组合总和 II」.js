var combinationSum2 = function(candidates, target) {
    let res = []
    let sum = 0
    let track = []
    let nums = candidates.sort((a,b) => a - b)
    const backtrack = (nums,start,target) => {
        if(sum === target){
            res.push([...track])
            return
        }
        if(sum > target){
            return
        }
        for (let i = start; i < nums.length; i++) {
            if(i > start && nums[i] === nums[i-1]){
                continue
            }
            track.push(nums[i])
            sum = sum + nums[i]
            backtrack(nums,i+1,target)
            track.pop()
            sum = sum - nums[i]
        }
    }
    backtrack(nums,0,target)
    return res
}
