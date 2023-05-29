// 解法1:遍历二叉树计算答案
var depth = 0
// 记录最大深度
var res = 0
function traverse(root){
    if(root === null) return
    // 前序位置
    depth++
    if(root.left === null && root.right === null){
        res = Math.max(depth,res)
    }
    traverse(root.left)
    traverse(root.right)
    depth--
}
function maxDepth(root){
    traverse(root)
    return res
}

// 解法2：分解问题
var maxDepth2 = (root) => {
    if(root == null) return
    var maxLeft = maxDepth2(root.left)
    var maxRight = maxDepth2(root.right)
    var res = Math.max(maxLeft,maxRight) + 1
    return res
}
