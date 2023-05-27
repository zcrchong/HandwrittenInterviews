function Parents (name) {
    this.name = name
}
Parents.prototype.sayName = function () {
    console.log('my name is',this.name)
}

function Son(name){
    Parents.call(this,name) // 属性继承
}
Son.prototype = new Parents() // 方法盗用
let son = new Son('zcr')
son.sayName()
