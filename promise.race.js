/*
* 在JavaScript中，Promise.race方法可以将多个Promise对象封装成一个新的Promise对象，
* 当其中任意一个Promise对象变为resolved或rejected状态时，新的Promise对象就会变为相应的状态，
* 返回第一个完成的Promise对象的结果。
* */
// 需要注意的是，在实现中，我们只处理第一个完成的Promise对象的结果或错误，
// 忽略其他Promise对象的结果或错误。因此，Promise.race方法适用于只关心最快完成的异步操作结果的场景。
Promise.prototype.race = (promises) => {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            promises[i].then((result) => {
                resolve(result)
            }).catch((err) => {
                reject(err)
            })
        }
    })
}
// Promise.race有什么具体使用场景
//
// Promise.race方法在业务场景中也非常常见，它可以将多个异步操作并行执行，但只关心最快完成的异步操作结果，忽略其他异步操作的结果。
//
// 以下是一些具体的业务场景，可以使用Promise.race方法：
//
// 超时处理：在某些场景下，需要对异步操作设置超时时间，如果超过指定时间还没有完成，则需要进行相应的处理。可以使用Promise.race方法将异步操作和超时Promise对象一起封装成一个新的Promise对象，当其中任意一个Promise对象完成时，返回相应的结果。
//
// 多个接口请求：在前端开发中，有时需要同时请求多个接口获取数据，但只关心最快返回的接口数据，可以使用Promise.race方法将多个异步请求并行执行，但只处理最快返回的接口数据。
//
// 多图片上传：在图片上传功能中，可以使用Promise.race方法将多个图片上传请求并行执行，但只处理最快上传完成的图片数据。
//
// 总之，Promise.race方法可以将多个异步操作并行执行，但只关心最快完成的异步操作结果，忽略其他异步操作的结果，应用场景也非常广泛。
