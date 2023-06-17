// 1. es6新增api flat
function flat(arr){
    return arr.flat(Infinity)
}
// 2. 普通递归
function flat(arr){
    let res = []
    arr.forEach((item) => {
        if(Array.isArray(item)){
            res = res.concat(flat(item))
        } else {
            res.push(item)
        }
    })
    return res
}
// 3. reduce
function flat(arr){
    arr.reduce((res,item) => {
      return res.concat(Array.isArray(item) ? flat(item) : item)
    },[])
}

// 4. split and String
function flat(arr){
    return arr.toString().split(',')
}
