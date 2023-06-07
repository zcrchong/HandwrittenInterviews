// 主函数
var connect = function(root) {
    if(root === null) return
    traverse(root.left , root.right)
    return root
}
// 三叉树遍历框架
function traverse(node1, node2) {
    if(node1=== null || node2 === null){
        return
    }
    node1.next = node2
    traverse(node1.left , node1.right)
    traverse(node2.left , node2.right)
    traverse(node1.right , node2.left)
}

