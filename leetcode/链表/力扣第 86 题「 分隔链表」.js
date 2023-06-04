/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let left = new ListNode(-1),right = new ListNode(-1) // 设置左右子链表
    let l = left , r = right , p = head
    while (p !== null) {
        if(p.val < x) {
            l.next = p
            l = l.next
        } else {
            r.next = p
            r = r.next
        }
        // 注意：这里要舍弃掉链表已经遍历完成的部分
        var temp = p.next
        p.next = null
        p = temp
    }
    l.next = right.next
    return left.next
};
