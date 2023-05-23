// 手写new操作符
/*
*   大致分为四步：
*       1、新建空对象obj
*       2、将obj的__proto__等于Fun的prototype
*       3、执行Fun，将其this指向obj
*       4、判断如果result属于Object，则返回result，否则返回obj
* */
function myNew(Fun){
    let obj = {}
    obj.__proto__  = Fun.prototype
    const result = Fun.apply(obj,arguments)
    return result instanceof Object ? result : obj
}
