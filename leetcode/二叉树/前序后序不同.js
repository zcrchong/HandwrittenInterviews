// 举具体的例子，现在给你一棵二叉树，我问你两个简单的问题：
// 1、如果把根节点看做第 1 层，如何打印出每一个节点所在的层数？
// 2、如何打印出每个节点的左右子树各有多少节点？

//1.
function traverse(root,level){
    if(root === null) return
    console.log(`${root}在第${level}层`)
    traverse(root.left,level + 1)
    traverse(root.left,level + 1)
}


//2.后序遍历，需要直到子节点上的东西
function traverse2(root){
    if(root === null) return 0
    let left = traverse2(root.left)
    let right =traverse2(root.right)
    console.log(`${root.left}上左节点有${left}个节点，右节点上有${right}个节点`)
    return left + right +1
}
