
class Human {
  name: string
  job: string

  constructor(name: string, job: string) {
    this.name = name
    this.job = job
  }

  eat() {
    console.log(`${this.name} is eating`)
  }
}

class Student extends Human {
  sno: number

  constructor(name: string, job: string, sno: number) {
    // 子类的构造函数中必须调用super
    super(name, job)
    this.sno = sno
  }
  
  study() {
    console.log(`${this.name} is studying`)
  }
}

const stu = new Student('ZJoker', 'developer', 100)

console.log(stu.name);
console.log(stu.job);
console.log(stu.sno);
stu.eat()
stu.study()

export {}