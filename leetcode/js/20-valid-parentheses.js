/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for (let c of s) {
        if (c === '[' || c === '{' || c === '(') stack.push(c);
        if (c === ']') {
            if (stack[stack.length - 1] === '[') stack.pop();
            else return false;
        }
        if (c === '}') {
            if (stack[stack.length - 1] === '{') stack.pop();
            else return false;
        }
        if (c === ')') {
            if (stack[stack.length - 1] === '(') stack.pop();
            else return false;
        }
    }
    if (stack.length === 0) return true;
    else return false;
};