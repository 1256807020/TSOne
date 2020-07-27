// class定义了一切事物的抽象特点
// object类的实例
// oop三大特性：封装，继承，多态
class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
  run() {
    return `${this.name} is running`
  }
}
const snake = new Animal('lily')
console.log(snake.run())
// 继承
class Dog extends Animal {
  bark() {
    return `${this.name} is bark`
  }
}
const xiaobao = new Dog('xiaobao')
console.log(xiaobao.run())

console.log(xiaobao.bark())
// 方法重写
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