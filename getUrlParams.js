// 给定一个url，要求解析出他的params键值对
// 正则表达式
const getUrlParams = url => {
    return url.match(/([^?=&]+)(=([^&]*))/g)
}
// [^?=&] 匹配key ，不以？开头
// =[^&] 匹配value
console.log(getUrlParams('www.baidu.com?name=yedi&age=18'))

// URLSearchParams
const url = "https://www.example.com/path?foo=bar&baz=qux&corge=";
const searchParmas = new URLSearchParams(url.split('?')[1])
console.log(searchParmas)
for (const [key,value] of searchParmas) {
    console.log('key:',key)
    console.log('value:',value)
}
