
// 规范：类名开头字母大写
// 规定：类属性必须初始化一个值

class Human {
  readonly name: string // readonly属性不可以修改值，如果该属性是一个引用类型的值，则可以修改其内部的属性。readonly属性的行为类似于 const
  // 规范：private属性以_开头
  private _job: string // private属性只能在类中访问
  // 通过声明时直接赋值形式初始化
  protected address: string = 'China' // protected属性 只能在类及其子类中访问。
  age: number // 默认为public属性 public age: number

  // 通过调用构造器的形式对属性进行初始化
  constructor(name: string, job: string, age: number) {
    this.name = name
    this._job = job
    this.age = age
  }

  // getter/setter 对private属性进行访问和修改
  get job() {
    return this._job
  }

  set job(newVal: string) {
    this._job = newVal
  }

  // 类方法对private属性进行访问和修改
  getJob() {
    return this._job
  }

  setJob(newVal: string) {
    this._job = newVal
  }

  printJob() {
    console.log(this._job)
  }

  study() {
    console.log(`${this.name} is studying`)
  }
}


const human = new Human('ZJoker', 'developer', 18)
console.log(human.name); // ZJoker
// console.log(human._job) // 编译错误：private属性只能在类中访问，可以通过类的方法或者getter/setter 对private属性进行访问或者修改
// console.log(human.address) // 编译错误：protected属性 只能在类“Human”及其子类中访问。
console.log(human.age); // 18
// human.name = 'Z' // 编译错误：readonly属性不可以修改值，如果该属性是一个引用类型的值，则可以修改其内部的属性。readonly属性的行为类似于 const
human.study() // ZJoker is studying

// getter/setter 对private属性进行访问和修改
console.log(human.job) // developer
human.job = 'driver'

// 类方法对private属性进行访问和修改
console.log(human.getJob()); // driver
human.setJob('developer') 
human.printJob() // developer


class Developer extends Human{
  selfIntroduction() {
    console.log(`I'm from ${this.address}`); // Developer class 是Human class 的子类， 所以这里可以访问address(Human中的protected属性)
  }
}

const d = new Developer('ZJoker', 'developer', 18)
d.selfIntroduction() // I'm from China