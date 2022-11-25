abstract class Animal {
  abstract name: string
  abstract move(): void
  breath() {
    console.log('breath')
  }
}

// const animal = new Animal() // 抽象类不可以被实例化

// 如果继承的类是抽象类，则必须实现抽象类对应的方法或属性
// class bird extends Animal{}

class Dog extends Animal {
  name: string = 'dog'
  move() {
    console.log(this.name + ' is running');
  }
}

class Fish extends Animal{
  name: string = 'fish'
  move() {
    console.log(this.name + ' is swimming');
  }
}

function makeMove(animals: Animal[]) {
  animals.forEach(animal => {
    animal.move()
    animal.breath()
    console.log(animal.constructor.name);
  })
}

makeMove([new Dog(), new Fish()])


export {}