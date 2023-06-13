// 节流
function throttling(fn,delay){
    let timer = null
    return function (){
        const context = this
        const args = arguments
        if(timer) return
        setTimeout(() => {
            timer = true
            fn.call(context,args)
        },delay)
    }
}
