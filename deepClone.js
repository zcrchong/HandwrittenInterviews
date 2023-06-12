function deepClone(obj){
    if(obj === null || ! obj instanceof Object){
        return obj
    }
    let newObj = Array.isArray(obj) ? [] : {}
    for (const key in obj) {
        if(Object.hasOwnProperty(key)){
            newObj[key] = deepClone(obj[key])
        }
    }
    return newObj
}
// 上述代码中，我们首先判断传入的参数是否为对象或者数组，
// 如果不是，则直接返回。
// 如果是对象或者数组，则创建一个新的对象或者数组，并递归拷贝原对象的属性或者元素。
// 需要注意的是，在递归拷贝属性或者元素时，需要判断属性或者元素是否为对象或者数组，并进行相应的处理。
// 下面是一个示例：
const obj1 = {
    name: '小明',
    age: 18,
    hobbies: ['篮球', '游泳', '旅游'],
    address: {
        province: '广东',
        city: '深圳',
        district: '南山区'
    }
};

const obj2 = deepClone(obj1);

console.log(obj2 === obj1); // false
console.log(obj2.hobbies === obj1.hobbies); // false
console.log(obj2.address === obj1.address); // false
