// 泛型,定义时不知道类型，使用时才定义,可以看成占位符
function echo<T>(arg: T): T {
  return arg
}
const str: string = 'str'
const result = echo(str)

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
const res2 = swap(['string', 123])
console.log(res2)

function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}
const arrs = echoWithArr([1, 2, 3])
interface IWithLength {
  length: number
}
// 泛型extends满足传入时条件
function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length)
  return arg
}
const str2 = echoWithLength('str')
const obj = echoWithLength({ length: 10 })
const arr2 = echoWithLength([1, 2, 3])
class Queue<T> {
  private data = []
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}
// 泛型传入number
const quene = new Queue<number>()
quene.push(1)
// quene.push('str')
console.log(quene.pop().toFixed())

const quene2 = new Queue<string>()
quene2.push('str')
console.log(quene2.pop().length)

interface KeyPair<T, U> {
  key: T,
  value: U
}
let kp1: KeyPair<number, string> = { key: 123, value: 'str' }
let kp2: KeyPair<string, number> = { key: '123', value: 123 }

let arr3: number[] = [1, 2, 3]
let arrTwo: Array<number> = [1, 2, 3]
interface IPlus<T> {
  (a: T, b: T): T
}
function plus(a: number, b: number): number {
  return a + b
}
function connect(a: string, b: string): string {
  return a + b
}
const a: IPlus<number> = plus
const b: IPlus<string> = connect