var traverse = (head) => {
    if(head === null) return
    traverse(head.next)
    console.log(head.val)
}
// 利用二叉树的后序遍历，将所有节点都压入函数栈中
