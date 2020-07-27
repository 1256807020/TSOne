// 函数的可选参数只能放在最后
// function add(x: number, y: number, z?: number): number {
//   if (typeof z === 'number') {
//     return x + y + z
//   } else {
//     return x + y
//   }
// }
// let result = add(2, 3)
const add = function (x: number, y: number, z?: number): number {
  if (typeof z === 'number') {
    return x + y + z
  } else {
    return x + y
  }
}

// 等同上方
const add2: (x: number, y: number, z?: number) => number = add