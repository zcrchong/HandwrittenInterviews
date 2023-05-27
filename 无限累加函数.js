// 无限累加函数：第一种方法
function add(x) {
    var sum = x;

    function innerAdd(y) {
        sum += y;
        return innerAdd;
    }

    innerAdd.toString = function() {
        return sum;
    };

    return innerAdd;
}

console.log(add(1)(2)(3)(4).toString()); // 10
// 第二种方法：reduce
const sum = (...args) => {
     const f = (...rets) => {
         return sum(...args,...rets)
     }
     f.valueOf = () => {
         return args.reduce((x,y) => x+y)
    }
    return f
}
