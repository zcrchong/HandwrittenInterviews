// 在JavaScript中，Promise.all方法可以将多个Promise对象封装成一个新的Promise对象，
// 当所有的Promise对象都变为resolved状态时，新的Promise对象才会变为resolved状态，
// 返回所有Promise对象的结果数组；当其中任意一个Promise对象变为rejected状态时，
// 新的Promise对象就会变为rejected状态，返回第一个rejected Promise对象的结果。
//
// 以下是一个实现Promise.all方法的示例代码，并将其挂载到Promise原型上：
Promise.prototype.all = (promises) => {
    return new Promise((resolve, reject) => {
        let results = []
        for (let i = 0; i < promises.length; i++) {
            promises[i].then((result) => {
                results.push(result)
                if(results.length === promises.length){
                    resolve(results)
                }
            }).catch((err) => {
                reject(err)
            })
        }
    })
}
