var combine = function (n, k) {
    let res = []
    let track = []
    function backtrack(start,n,k){
        if(track.length === k){
            res.push([...track])
            return
        }
        for (let i = start; i < n; i++) {
            track.push(i)
            backtrack(i+1,n,k)
            track.pop()
        }
    }
    backtrack(1,n,k)
    return res
};
console.log(combine(4, 2)); // 输出：[[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
console.log(combine(5, 3)); // 输出：[[1, 2, 3], [1, 2, 4], [1, 2, 5], [1, 3, 4], [1, 3, 5], [1, 4, 5], [2, 3, 4], [2, 3, 5], [2, 4, 5], [3, 4, 5]]
console.log(combine(3, 1)); // 输出：[[1], [2], [3]]
