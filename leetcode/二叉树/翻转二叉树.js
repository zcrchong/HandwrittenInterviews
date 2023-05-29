// 分解问题
function invertTree(root){
    if(root === null) return
    let left = invertTree(root.left)
    let right = invertTree(root.right)
    root.left = right
    root.right = left
    return root
}
// 遍历
var invertTree2 = (root) => {
    const traverse = (root) => {
        if(root === null) return
        let a = root.left
        root.left = root.right
        root.right = a
        traverse(root.left)
        traverse(root.right)
    }
    traverse(root)
    return root
}
