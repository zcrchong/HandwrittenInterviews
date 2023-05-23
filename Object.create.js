// Object.create的作用就是创建一个新对象，该对象以传入的对象参数为原型
Object.prototype.myCreate = function (obj) {
    function Fun() {}
    Fun.prototype = obj
    return new Fun()
}
