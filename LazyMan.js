class LazyMan {
    // 构造函数，接收一个名字参数
    constructor(name) {
        // 初始化任务队列
        this.tasks = [];
        // 将打招呼任务添加到任务队列
        this.tasks.push(() => {
            console.log(`Hello ${name}!`);
            this.next();
        });

        // 使用 setTimeout 确保任务队列在下一个事件循环中执行
        setTimeout(() => {
            this.next();
        }, 0);
    }

    // 执行任务队列中的下一个任务
    next() {
        const task = this.tasks.shift();
        task && task();
    }

    // 添加睡眠任务到任务队列
    sleep(time) {
        this.tasks.push(() => {
            console.log(`Wait...${time}s`);
            setTimeout(() => {
                this.next();
            }, time * 1000);
        });
        return this;
    }

    // 添加打招呼任务到任务队列
    sayHi(name) {
        this.tasks.push(() => {
            console.log(`Hi ${name}!`);
            this.next();
        });
        return this;
    }
}

// 工厂函数，用于创建 LazyMan 实例
function LazyManFactory(name) {
    return new LazyMan(name);
}

LazyManFactory("yedi").sayHi("yedi").sleep(2).sayHi("wangzhao");

// Promise版本
function _lazyMan(){
    this.tasks = []
    let that = this
    // 先get到所有的任务，等任务都push进去that中执行微任务队列
    Promise.resolve().then(() => {
        // 将要执行的任务全部丢到微任务队列中去执行
        let p = Promise.resolve()
        that.tasks.map((t) => {
            p = p.then(t)
        })
    })
}
_lazyMan.prototype.sayHello = function (name){
    this.tasks.push(() => {
        console.log('hello',name)
    })
    return this
}
_lazyMan.prototype.wait = function (time) {
    this.tasks.push(() => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(1)
            },time * 1000)
        })
    })
    return this
}
function _lazyMan(){
    return new _lazyMan()
}
