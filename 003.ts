let isDone: boolean = false
let age: number = 20
let username: string = 'typescript'
let u: undefined = undefined
let n: null = null
let anyone: any = 4
// 联合类型
let numberandstring: number | string = 234
let arrofnumber: number[] = [1, 2, 3, 4]
function test() {
  console.log(arguments)
  // 参数arguments是类数组，不能赋给数组
  // let arr: any[] = arguments
}
// 不同类型参数组数组，可用元组
let user: [string, number] = ['name', 20]