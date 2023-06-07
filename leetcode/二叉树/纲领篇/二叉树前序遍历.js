// 第一种解法：遍历整个树
var res = []
let traverse = (root) => {
    if(root === null) return
    res.push(root.val)
    traverse(root.left)
    traverse(root.right)
}
let preTraverse = function (root) {
    traverse(root)
    return res
}

// 分解问题方法:前中后序遍历也是同理，将res.push(root.val)换一下顺序就ok
let preTraverse2 = function (root) {
    if(root === null) return
    res.push(root.val)
    res.push(...preTraverse2(root.left))
    res.push(...preTraverse2(root.right))
    return res
}
