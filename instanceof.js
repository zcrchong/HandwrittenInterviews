// Object.getPrototypeOf(obj)  == obj.__proto__
// 即沿着原型链一直往上找，直到obj的某一个__proto__为null或者等于Obj的prototype
function myInstanceOf(obj , Obj){
    let proto = Object.getPrototypeOf(obj)
    let prototype = Obj.prototype
    while (true){
        if(!proto) return false
        if(proto === prototype) return true
        proto = Object.getPrototypeOf(proto)
    }
}
