// 手写一个mini版promise：Promise是现代JavaScript最常用的异步解决方案之一，本质上是一种对回调函数的封装，
// 能够更加便捷地处理异步操作，避免回调地狱问题。
// 下面是一个简单的手写Promise的示例：
class MiniPromise {
    constructor(executor) {
        this.status = 'pending' // 状态： pending, fulfilled, rejected，初始值为pending未定义
        this.result = undefined // promise的结果值
        this.callbacks = [] // 当promise变为fulfilled或者rejected时，需要执行的回调函数

        // 定义 resolve和reject方法，用来作成功或者失败的回调函数
        const resolve = (result) => {
            if(this.status === 'pending') return
            this.status = 'fulfilled'
            this.result = result

            // 异步调用已缓存的回调函数数组
            setTimeout(() => {
                this.callbacks.forEach((callback) => {
                    callback.onFulfilled(result)
                })
            },0)
        }
        const reject = (reason) => {
            if(this.status === 'pending') return
            this.status = 'rejected'
            this.reason = reason

            // 异步调用已缓存的回调函数数组
            setTimeout(() => {
                this.callbacks.forEach((callback) => {
                    callback.onRejected(reason)
                })
            })
        }

        // 启动异步的executor函数，并在回调函数中调用resolve或reject方法
        try {
            exeucutor(resolve,reject)
        } catch(err) {
            reject(err)
        }

    }
    then(onFulfilled , onRejected) {
        if(this.status === 'fulfilled'){
            onFulfilled()
        } else if(this.status === 'rejected') {
            onRejected()
        }
    }

}
