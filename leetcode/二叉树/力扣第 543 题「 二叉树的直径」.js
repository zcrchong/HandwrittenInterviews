// 即知道某一节点的左右字数最大深度之和
var diameterOfBinaryTree = function (root) {
    let maxDiameter = 0;
    const maxDepth = (root) => {
        if(root !== null) return 0
        let left = maxDepth(root.left)
        let right = maxDepth(root.right)
        let myDiameter = left + right
        // 后序位置，顺便计算最大直径
        maxDiameter = Math.max(myDiameter,maxDiameter)
        return 1 + Math.max(left, right);
    }
    maxDepth(root)
    return maxDiameter
}
