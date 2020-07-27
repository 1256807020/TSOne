// class定义了一切事物的抽象特点
// object类的实例
// oop三大特性：封装，继承，多态
class Animal {
  readonly user: string
  protected gender: number
  private age: number
  public name: string
  // 类和实例无太大关系时，可以定义
  static categoies: string[] = ['aaa', 'bbb']
  static isAnimal(a) {
    return a instanceof Animal
  }
  constructor(name: string) {
    this.name = name
  }
  run() {
    return `${this.name} is running`
  }
}
const snake = new Animal('lily')
console.log(snake.run())
console.log(Animal.isAnimal(snake))
// 继承
class Dog extends Animal {
  bark() {
    return `${this.name} is bark`
  }
}
const xiaobao = new Dog('xiaobao')
console.log(xiaobao.run())
// xiaobao.age = 12

console.log(xiaobao.bark())
// 方法重写
// super之后为子类
class Cat extends Animal {
  constructor(name) {
    super(name)
    console.log(this.name)
  }
  // 重写
  run() {
    return 'hi,' + super.run()
  }
}
const maomao = new Cat('maomao')
console.log(maomao.run())
