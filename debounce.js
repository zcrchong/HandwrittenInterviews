// 防抖：防抖函数是指在事件触发后，等待一定时间再执行回调函数，如果在等待时间内再次触发了事件，则重新计时。防抖函数常用于优化频繁触发的事件，例如窗口大小改变、滚动等。
function debounce(fn,delay){
    let timer = null
    return function (){
        const context = this
        const args = arguments
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.call(context,...args)
        },delay)
    }
}
