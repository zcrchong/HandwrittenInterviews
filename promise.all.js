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
// // 相关八股文
// promise.all在业务场景中有什么具体使用吗？
//
// Promise.all方法在业务场景中非常常见，它可以将多个异步操作并行执行，等待所有异步操作完成后再进行下一步操作，提高了异步操作的效率和性能。
//
// 以下是一些具体的业务场景，可以使用Promise.all方法：
//
// 批量请求数据：在前端开发中，有时需要同时请求多个接口获取数据，使用Promise.all可以将多个异步请求并行执行，等待所有请求完成后再进行下一步操作。
//
// 多图片上传：在图片上传功能中，可以使用Promise.all方法将多个图片上传请求并行执行，等待所有图片上传完成后再进行下一步操作。
//
// 多文件下载：在文件下载功能中，可以使用Promise.all方法将多个文件下载请求并行执行，等待所有文件下载完成后再进行下一步操作。
//
// 批量处理数据：在数据处理功能中，有时需要对多个数据进行批量处理，使用Promise.all可以将多个异步处理操作并行执行，等待所有处理完成后再进行下一步操作。
//
// 总之，Promise.all方法可以将多个异步操作并行执行，等待所有异步操作完成后再进行下一步操作，提高了异步操作的效率和性能，应用场景非常广泛。
