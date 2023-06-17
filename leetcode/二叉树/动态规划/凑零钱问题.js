var coinChange = function (coins, amount) {
    // 题目要求的最终结果是 dp(amount)
    return dp(coins, amount);
}

// 定义：要凑出金额 n，至少要 dp(coins, n) 个硬币
function dp(coins, amount) {
    if (amount < 0) return -1
    if (amount === 0) return 0
    let res = Infinity
    for (const coin of coins) {
        let subPromise = dp(coins, amount - coin)
        if (subPromise === -1) continue
        res = Math.min(res, subPromise + 1)
    }
    return res == Infinity ? -1 : res
}
