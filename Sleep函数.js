// setTimeout方法，但容易出现回调嵌套的问题
console.time('runTime:');
setTimeout(() => {
    console.log('1');
    setTimeout(() => {
        console.log('2')
        setTimeout(() => {
            console.log('3')
            console.timeEnd('runTime:');
        }, 2000);
    }, 3000);
}, 2000);
//结果：
//1
//2
//3
//runTime:: 7017.87890625 ms

// Date:通过死循环来阻止代码执行，同时不停比对是否超时。
// 缺点：
// 以上的代码不会让线程休眠，而是通过高负荷计算使cpu无暇处理其他任务。
// 这样做的缺点是在sleep的过程中其他所有的任务都会被暂停，包括dom的渲染。
// 所以sleep的过程中程序会处于假死状态，并不会去执行其他任务
function sleep(time){
    var timeStamp = new Date().getTime()
    var endTime = timeStamp + time
    while (true){
        if(new Date().getTime() > endTime){
            return
        }
    }
}

// 基于promise
function sleep(time){
    return new Promise((resolve, reject) => {
        setTimeout(resolve,time)
    })
}
