// 手写call
// 一个是要调用的函数fn，另一个是要绑定的上下文对象context。
/*
*   逻辑：
    使用Array.prototype.slice.call(arguments, 2)获取从第三个参数开始的所有参数。
    如果context为null或undefined，则将其设置为全局对象window。
    将fn作为context对象的一个属性，并将其值设置为传入的函数。
    使用扩展运算符...args将参数传递给context.fn，并执行该函数，将结果保存在result中。
    删除context对象上的fn属性。
    返回执行结果result。
* */
function myCall(fn,context){
    var args = Array.prototype.slice.call(arguments,2)
    context = context || window
    context.fn = fn
    const result = context.fn(...args)
    delete context.fn
    return result
}
