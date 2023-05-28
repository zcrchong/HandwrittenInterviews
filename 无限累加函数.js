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
function sum(...args) {
    function innerSum(...rets) {
        return sum(...args, ...rets);
    }

    innerSum.valueOf = function() {
        return args.reduce((res, y) => res + y);
    };

    return innerSum;
}
console.log(sum(1)(2)(3)(4).valueOf()); // 10
