// 判断两个链表是否会相交
var getIntersectionNode = function(headA, headB) {
    let lenA = 0, lenB = 0;
    // 计算两条链表的长度
    for (let p1 = headA; p1 !== null; p1 = p1.next) {
        lenA++;
    }
    for (let p2 = headB; p2 !== null; p2 = p2.next) {
        lenB++;
    }
    // 让 p1 和 p2 到达尾部的距离相同
    let p1 = headA, p2 = headB;
    if (lenA > lenB) {
        for (let i = 0; i < lenA - lenB; i++) {
            p1 = p1.next;
        }
    } else {
        for (let i = 0; i < lenB - lenA; i++) {
            p2 = p2.next;
        }
    }
    // 看两个指针是否会相同，p1 == p2 时有两种情况：
    // 1、要么是两条链表不相交，他俩同时走到尾部空指针
    // 2、要么是两条链表相交，他俩走到两条链表的相交点
    while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1;
};
