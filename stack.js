// 栈的一个经典例题：腾讯面试题
// 大括号，小括号，中括号完全匹配的，要求完全闭区间“）（”,这种属于开区间，“（）”，这种属于闭区间。请写一下这道算法题
// 这道算法题可以使用栈来解决。
//
// 具体思路如下：
//
// 遍历字符串中的每个字符，如果是左括号（即"("、"["、"{"），则将其压入栈中。
//
// 如果是右括号（即")"、"]"、"}"），则从栈顶弹出一个元素，判断其是否与当前右括号匹配。如果匹配，则继续遍历字符串；如果不匹配，则说明括号不完全匹配，返回false。
//
// 如果遍历完字符串后，栈中仍有元素，则说明括号不完全匹配，返回false；否则说明括号完全匹配，返回true。
//
// 代码实现如下：
function isBracketMatch(str){
    let stack = []
    for (let i = 0; i < str.length; i++) {
        if(str[i] == '(' || str[i] == '[' || str[i] == '{'){
            stack.push(str[i])
        } else if(str[i] === ')' || str[i] === ']' || str[i] === '}'){
            let top = stack.pop()
            if(str[i] === ')' && top !== '(' || str[i] === ']' && top !== '[' || str[i] === '}' && top !== '{'){
                return false
            }
        }

    }
    return stack.length === 0
}
console.log(isBracketMatch('()')); // true
console.log(isBracketMatch('([])')); // true
console.log(isBracketMatch('{[()]}')); // true
console.log(isBracketMatch('({[}])')); // false
console.log(isBracketMatch('(())(')); // false
