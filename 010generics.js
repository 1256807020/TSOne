// 泛型,定义时不知道类型，使用时才定义
function echo(arg) {
    return arg;
}
var str = 'str';
var result = echo(str);
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
var res2 = swap(['string', 123]);
console.log(res2);
