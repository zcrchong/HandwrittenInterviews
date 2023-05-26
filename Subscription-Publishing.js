// 手写一个完整的消息订阅与发布模式，包括on：消息订阅、emit：消息发布、off：取消订阅、once：消息一次性订阅
// 订阅一个事件中心对象
class EventEmitter{
    constructor() {
        this.events = {}
    }
    // 消息订阅
    on(eventName,callback){
        if(!this.events[eventName]){
            this.events[eventName] = []
        }
        this.events[eventName].push(callback)
    }
    // 消息发布
    emit(eventName,...args){
        if(this.events[eventName]){
            this.events[eventName].forEach((callback) => {
                callback.apply(this,args)
            })
        }
    }
    // 取消订阅
    off(eventName,callback){
        if(this.events[eventName]){
            if(callback){
                this.events[eventName].filter((fn) => fn !== callback)
            } else {
                delete this.events[eventName]
            }
        }
    }
    // 一次性订阅事件
    once(eventName,callback){
        const onceCallback = (...args) => {
            callback.apply(this,args)
            this.off(eventName,onceCallback)
        }
        this.on(eventName,onceCallback)
    }

}
