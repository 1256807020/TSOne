// 枚举，常量
enum Direction {
  Up,
  Down,
  Left,
  Right
}
console.log(Direction.Up)
console.log(Direction[0])

enum Direction2 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}
const value = 'UP'
if (value === Direction2.Up) {
  console.log('up')
}
// 常量枚举，看编译出来的文件，不会再编译枚举，提升性能
const enum Direction3 {
  Up,
  Down,
  Left,
  Right
}
console.log(Direction3.Up)












