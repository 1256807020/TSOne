// interface接口
// 对对象的形状shape进行描述
// 对类class进行抽象
interface Person {
  // 只读属性，用在属性上，constructor用在变量上
  readonly id: number
  name: string,
  // 加？表示该参数为可选
  age?: number
}
let ts: Person = {
  id: 111,
  name: 'typescript',
  age: 20,
}
// 只读属性不可赋值
// ts.id = 122